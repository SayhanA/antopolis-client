"use client";

import React, { useState, useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SecondaryBtn from "./SecondaryBtn";
import { toast } from "react-toastify";

const AddCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const initialValues = { name: "" };
  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name is required";
    return errors;
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setErrors }
  ) => {
    try {
      const res = await fetch(
        "https://antopolis-backend-du9t.onrender.com/api/categories",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 409) {
          toast.error("Category already exists");
          setErrors({ name: "Category already exists" });
        } else {
          toast.error("Something went wrong");
        }
        setSubmitting(false);
        return;
      }

      toast.success("Category added successfully.");
      resetForm();
      setIsOpen(false);
    } catch (err) {
      console.error("Error submitting category:", err);
      toast.error("Failed to submit category");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <SecondaryBtn onClick={() => setIsOpen(true)}>Add Category</SecondaryBtn>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center px-4">
          <div
            ref={modalRef}
            className="bg-[rgba(110,110,110,0.52)] rounded-2xl p-7 w-fit max-w-[350px] shadow-lg border border-white/60"
          >
            <h2 className="text-xl font-semibold mb-4 text-white text-center">
              Add Category
            </h2>

            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Category name"
                      className="w-full border border-white/60 px-5 py-3 rounded-full placeholder:text-white bg-transparent text-white"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-red-600 w-full rounded-full text-white px-4 py-3 hover:bg-red-700 transition flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                          </svg>
                          Saving...
                        </>
                      ) : (
                        "Save"
                      )}
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

export default AddCategory;
