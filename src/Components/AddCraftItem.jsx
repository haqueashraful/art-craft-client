import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../context/MyContextProvider";

const AddCraftItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(Context);

  const userEmail = user?.email || "";
  const userName = user?.displayName || "";
  const onSubmit = (data) => {
    const formData = {
      ...data,
      userName: user.displayName,
      userEmail: user.email,
    };
    console.log(formData);
    console.log("Submitting form data:", data);
    fetch("http://localhost:5000/allArtCraft", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((formData) => {
        console.log("Form submission response:", formData);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add Craft Item</h1>
      <form
        id="craftItemForm"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
        <div className="flex flex-col">
          <label htmlFor="imageUrl" className="text-sm font-medium mb-2">
            Image URL:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            {...register("imageUrl", { required: true })}
            className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
              errors.imageUrl ? "border-red-500" : ""
            }`}
          />
          {errors.imageUrl && (
            <span className="text-red-500 text-sm">Image URL is required.</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="itemName" className="text-sm font-medium mb-2">
            Item Name:
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            {...register("itemName", { required: true })}
            className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
              errors.itemName ? "border-red-500" : ""
            }`}
          />
          {errors.itemName && (
            <span className="text-red-500 text-sm">Item Name is required.</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="subcategoryName" className="text-sm font-medium mb-2">
            Subcategory Name:
          </label>
          <select
            id="subcategoryName"
            name="subcategoryName"
            {...register("subcategoryName", { required: true })}
            className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
              errors.subcategoryName ? "border-red-500" : ""
            }`}
          >
            <option value="">Select Subcategory</option>
            <option value="Landscape Painting">Landscape Painting</option>
            <option value="Portrait Drawing">Portrait Drawing</option>
            <option value="Watercolour Painting">Watercolour Painting</option>
            <option value="Oil Painting">Oil Painting</option>
            <option value="Charcoal Sketching">Charcoal Sketching</option>
            <option value="Cartoon Drawing">Cartoon Drawing</option>
          </select>
          {errors.subcategoryName && (
            <span className="text-red-500 text-sm">
              Subcategory Name is required.
            </span>
          )}
        </div>
        <div className="flex flex-col">
            <label htmlFor="stockStatus" className="text-sm font-medium mb-2">
              Stock Status:
            </label>
            <select
              id="stockStatus"
              name="stockStatus"
              {...register("stockStatus", { required: true })}
              className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
                errors.stockStatus ? "border-red-500" : ""
              }`}
            >
              <option value="inStock">In Stock</option>
              <option value="madeToOrder">Made to Order</option>
            </select>
            {errors.stockStatus && (
              <span className="text-red-500 text-sm">
                Stock Status is required.
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="shortDescription"
            className="text-sm font-medium mb-2"
          >
            Short Description:
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            rows="4"
            {...register("shortDescription", { required: true })}
            className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
              errors.shortDescription ? "border-red-500" : ""
            }`}
          />
          {errors.shortDescription && (
            <span className="text-red-500 text-sm">
              Short Description is required.
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="price" className="text-sm font-medium mb-2">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              {...register("price", { required: true })}
              className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
                errors.price ? "border-red-500" : ""
              }`}
            />
            {errors.price && (
              <span className="text-red-500 text-sm">Price is required.</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="rating" className="text-sm font-medium mb-2">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              {...register("rating", { required: true })}
              className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
                errors.rating ? "border-red-500" : ""
              }`}
            />
            {errors.rating && (
              <span className="text-red-500 text-sm">Rating is required.</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="customization" className="text-sm font-medium mb-2">
              Customization:
            </label>
            <select
              id="customization"
              name="customization"
              {...register("customization", { required: true })}
              className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
                errors.customization ? "border-red-500" : ""
              }`}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.customization && (
              <span className="text-red-500 text-sm">
                Customization is required.
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="processingTime"
              className="text-sm font-medium mb-2"
            >
              Processing Time:
            </label>
            <input
              type="text"
              id="processingTime"
              name="processingTime"
              {...register("processingTime", { required: true })}
              className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
                errors.processingTime ? "border-red-500" : ""
              }`}
            />
            {errors.processingTime && (
              <span className="text-red-500 text-sm">
                Processing Time is required.
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="userEmail" className="text-sm font-medium mb-2">
            User Email:
          </label>
          <input
            type="email"
            id="userEmail"
            value={userEmail}
            disabled
            {...register("userEmail", { required: false })}
            className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
              errors.userEmail ? "border-red-500" : ""
            }`}
          />
          {errors.userEmail && (
            <span className="text-red-500 text-sm">
              User Email is required.
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="userName" className="text-sm font-medium mb-2">
            User Name:
          </label>
          <input
            type="text"
            id="userName"
            value={userName}
            disabled
            {...register("userName", { required: false })}
            className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
              errors.userName ? "border-red-500" : ""
            }`}
          />
          {errors.userName && (
            <span className="text-red-500 text-sm">User Name is required.</span>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCraftItem;
