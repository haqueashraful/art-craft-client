import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateCraftItem = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm();

  const watchImageUrl = watch("imageUrl");
  const watchSubcategoryName = watch("subcategoryName");
  const watchShortDescription = watch("shortDescription");
  const watchPrice = watch("price");
  const watchRating = watch("rating");
  const watchCustomization = watch("customization");
  const watchProcessingTime = watch("processingTime");
  const watchStockStatus = watch("stockStatus");
  const watchItemName = watch("itemName");

  const craft = useLoaderData();
  console.log(craft)

  const {
    _id,
    imageUrl,
    itemName,
    subcategoryName,
    shortDescription,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = craft;

  const onSubmit = (data) => {
    fetch(`https://art-craft-server.vercel.app/allArtCraft/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Form submission response:", data);
        reset()
        navigate("/myartcraftlist");
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...watch, [name]: value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Update Craft Item</h1>
      <form
        id="updateCraftItemForm"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="imageUrl" className="text-sm font-medium mb-2">
              Image URL:
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={watchImageUrl || imageUrl}
              onChange={handleInputChange}
              {...register("imageUrl", { required: true })}
              className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
                errors.imageUrl ? "border-red-500" : ""
              }`}
            />
            {errors.imageUrl && (
              <span className="text-red-500 text-sm">
                Image URL is required.
              </span>
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
              value={watchItemName || itemName}
              onChange={handleInputChange}
              {...register("itemName", { required: true })}
              className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
                errors.itemName ? "border-red-500" : ""
              }`}
            />
            {errors.itemName && (
              <span className="text-red-500 text-sm">
                Item Name is required.
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="subcategoryName"
              className="text-sm font-medium mb-2"
            >
              Subcategory Name:
            </label>

            <select
              id="subcategoryName"
              name="subcategoryName"
              value={watchSubcategoryName || subcategoryName}
              onChange={handleInputChange}
              {...register("subcategoryName", { required: true })}
              className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full ${
                errors.subcategoryName ? "border-red-500" : ""
              }`}
            >
              <option value="">Select Subcategory</option>
              <option
                value="landscape_painting"
                selected={watchSubcategoryName === "landscape_painting"}
              >
                Landscape Painting
              </option>
              <option
                value="portrait_drawing"
                selected={watchSubcategoryName === "portrait_drawing"}
              >
                Portrait Drawing
              </option>
              <option
                value="watercolour_painting"
                selected={watchSubcategoryName === "watercolour_painting"}
              >
                Watercolour Painting
              </option>
              <option
                value="oil_painting"
                selected={watchSubcategoryName === "oil_painting"}
              >
                Oil Painting
              </option>
              <option
                value="charcoal_sketching"
                selected={watchSubcategoryName === "charcoal_sketching"}
              >
                Charcoal Sketching
              </option>
              <option
                value="cartoon_drawing"
                selected={watchSubcategoryName === "cartoon_drawing"}
              >
                Cartoon Drawing
              </option>
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
              value={watchStockStatus || stockStatus}
              onChange={handleInputChange}
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
            value={watchShortDescription || shortDescription}
            onChange={handleInputChange}
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
              value={watchPrice || price}
              onChange={handleInputChange}
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
              value={watchRating || rating}
              onChange={handleInputChange}
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
              value={watchCustomization || customization}
              onChange={handleInputChange}
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
              value={watchProcessingTime || processingTime}
              onChange={handleInputChange}
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

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCraftItem;
