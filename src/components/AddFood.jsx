import { useFoodStore } from "@/store/foodStore";
import { useEffect, useState, useRef, useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SecondaryBtn from "./SecondaryBtn";
import { toast } from "react-toastify";

const AddFood = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);

  const { categories, fetchCategories, fetchFoods } = useFoodStore();

  useEffect(() => {
    if (isOpen && categories.length === 0) {
      fetchCategories();
    }
  }, [isOpen, categories.length, fetchCategories]);


  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("category", values.category);
      if (values.image) {
        formData.append("image", values.image);
      }

      const response = await fetch(
        "https://antopolis-backend-du9t.onrender.com/api/foods",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        toast.error("Failed to add food");
        throw new Error("Failed to add food");
      }

      const data = await response.json();
      toast.success("Food saved successfully.");
      fetchFoods()

      resetForm();
      setIsOpen(false);

    } catch (error) {
      toast.error("Failed to add food");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <SecondaryBtn onClick={() => setIsOpen(true)}>Add Food</SecondaryBtn>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div
            ref={modalRef}
            className="bg-[rgba(89,89,89,0.52)] backdrop-blur-md rounded-2xl p-6 w-fit shadow-lg border border-white/60"
          >
            <h2 className="text-xl font-semibold mb-4 text-white text-center">
              Add Food
            </h2>

            <Formik
              initialValues={{ name: "", category: "", image: null }}
              validate={(values) => {
                const errors = {};
                if (!values.name) errors.name = "Name is required";
                if (!values.category) errors.category = "Category is required";
                return errors;
              }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, values }) => (
                <Form className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Food name"
                      className="w-full border border-white/60 px-5 py-3 rounded-full placeholder:text-white outline-0 text-white text-lg"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Category Field */}
                  <div className="text-white">
                    <label className="block text-sm font-medium mb-2">
                      Food Category
                    </label>
                    <Field
                      name="category"
                      as="select"
                      className="w-full bg-transparent border border-white/60 text-white px-5 py-3 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-white/40"
                    >
                      <option
                        value=""
                        disabled
                        className="bg-transparent text-white"
                      >
                        Select category
                      </option>
                      {categories.map((cat) => (
                        <option
                          key={cat._id || cat.id || cat.name}
                          value={cat.name}
                          className="bg-gray-800 text-white"
                        >
                          {cat.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="category"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-red-600 text-white px-4 py-3 w-full rounded-full hover:bg-red-700 transition ${
                        isSubmitting ? "bg-red-800 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Saving..." : "Save"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFood;
