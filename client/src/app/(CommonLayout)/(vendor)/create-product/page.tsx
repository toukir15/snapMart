"use client"
import React, { useState } from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { Input, Button, Checkbox, Textarea, Select, SelectItem } from "@nextui-org/react";
import { IoCloseSharp } from "react-icons/io5";
import { useCreateProduct } from '@/src/hooks/product.hook';

export const departments = [
    { key: "Men", label: "Men" },
    { key: "Women", label: "Women" },
    { key: "Kids", label: "Kids" },

];
interface ImagePreview {
    file: File;
    preview: string;
}

const ProductForm = () => {
    const { mutate: handleCreateProduct } = useCreateProduct()
    const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([]);
    const [productFile, setProductFile] = useState<File[]>([]);
    const {
        register,
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: FieldValues) => {
        const formData = new FormData();
        formData.append("data", JSON.stringify(data));
        productFile.forEach((file: any) => {
            formData.append("file", file);
        });
        handleCreateProduct(formData)
    };
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newPreviews: ImagePreview[] = [];
            const newFiles: File[] = [];

            Array.from(files).forEach((file) => {
                // Prevent duplicate images across all previews
                if (!imagePreviews.some((preview) => preview.file.name === file.name)) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        newPreviews.push({
                            file,
                            preview: reader.result as string,
                        });
                        newFiles.push(file);

                        // Update state only after processing all files
                        if (newPreviews.length === files.length) {
                            setImagePreviews((prev) => [...prev, ...newPreviews]);
                            setProductFile((prev) => [...prev, ...newFiles]);
                        }
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    };

    const removeImage = (fileToRemove: File) => {
        // Remove file from imagePreviews
        setImagePreviews((prev) => prev.filter((preview) => preview.file !== fileToRemove));

        // Remove file from productFile
        setProductFile((prev) => prev.filter((file) => file !== fileToRemove));

        // Reset file input
        setValue("image", null);
    };


    return (
        <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen ">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-xl mx-auto space-y-6 bg-white shadow-2xl rounded-2xl p-8 border border-gray-100"
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Add New Product
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Product Name */}
                    <div className="col-span-full">
                        <Input
                            {...register("name")}
                            label="Product Name"
                            fullWidth
                            variant="bordered"
                            color={errors.name ? "danger" : "default"}
                            errorMessage={errors.name?.message as string}
                        />
                    </div>
                    {/* Department */}
                    <div className="col-span-full">
                        <Select
                            items={departments}
                            label="Department"
                            variant='bordered'
                        >
                            {(department) => <SelectItem>{department.label}</SelectItem>}
                        </Select>
                    </div>

                    {/* Price */}
                    <Input
                        {...register("price", {
                            setValueAs: (v) => v === '' ? undefined : Number(v)
                        })}
                        type="number"
                        label="Price"
                        fullWidth
                        variant="bordered"
                        color={errors.price ? "danger" : "default"}
                        errorMessage={errors.price?.message as string}
                    />

                    {/* Brand */}
                    <Input
                        {...register("brand")}
                        label="Brand"
                        fullWidth
                        variant="bordered"
                        color={errors.brand ? "danger" : "default"}
                        errorMessage={errors.brand?.message as string}
                    />

                    {/* Rating */}
                    <Input
                        {...register("rating", {
                            setValueAs: (v) => v === '' ? undefined : Number(v)
                        })}
                        type="number"
                        label="Rating"
                        color={errors.rating ? "danger" : "default"}
                        variant='bordered'
                        fullWidth
                        errorMessage={errors.rating?.message as string}
                    />

                    {/* Model */}
                    <Input
                        {...register("model")}
                        label="Model"
                        fullWidth
                        variant="bordered"
                        color={errors.model ? "danger" : "default"}
                        errorMessage={errors.model?.message as string}
                    />

                    {/* Style Code */}
                    <Input
                        {...register("styleCode")}
                        label="Style Code"
                        fullWidth
                        variant="bordered"
                        color={errors.styleCode ? "danger" : "default"}
                        errorMessage={errors.styleCode?.message as string}
                    />

                    {/* Color */}
                    <Input
                        {...register("color")}
                        label="Color"
                        fullWidth
                        variant="bordered"
                        color={errors.color ? "danger" : "default"}
                        errorMessage={errors.color?.message as string}
                    />

                    {/* Description */}
                    <div className="col-span-full">
                        <Textarea
                            {...register("description")}
                            label="Description"
                            fullWidth
                            variant="bordered"
                            color={errors.description ? "danger" : "default"}
                            errorMessage={errors.description?.message as string}
                        />
                    </div>

                    {/* Image Upload with Multiple Preview */}
                    <div className="col-span-full">
                        <div className="space-y-4">
                            <Input
                                type="file"
                                accept="image/*"
                                fullWidth
                                multiple
                                onChange={handleImageChange}
                                variant="bordered"
                            />

                            {/* Image Preview Grid */}
                            {imagePreviews.length > 0 && (
                                <div className="grid grid-cols-4 gap-4 mt-4">
                                    {imagePreviews.map((preview, index) => (
                                        <div
                                            key={`${preview.file.name}-${index}`}
                                            className="relative group"
                                        >
                                            <img
                                                src={preview.preview}
                                                alt={`Product Preview ${index + 1}`}
                                                className="w-full h-24 object-cover rounded-lg"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(preview.file)}
                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <IoCloseSharp />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Inventory and Discount */}
                    <Input
                        {...register("inventoryCount", {
                            setValueAs: (v) => v === '' ? undefined : Number(v)
                        })}
                        type="number"
                        label="Inventory Count"
                        fullWidth
                        variant="bordered"
                        color={errors.inventoryCount ? "danger" : "default"}
                        errorMessage={errors.inventoryCount?.message as string}
                    />

                    <Input
                        {...register("discount", {
                            setValueAs: (v) => v === '' ? undefined : Number(v)
                        })}
                        type="number"
                        label="Discount (%)"
                        fullWidth
                        variant="bordered"
                        color={errors.discount ? "danger" : "default"}
                        errorMessage={errors.discount?.message as string}
                    />

                    {/* Flash Sale Checkbox */}
                    <div className="col-span-full">
                        <Controller
                            name="isFlashSale"
                            control={control}
                            defaultValue={false}
                            render={({ field: { value, onChange } }) => (
                                <Checkbox
                                    isSelected={value}
                                    onValueChange={onChange}
                                    color="warning"
                                >
                                    Flash Sale
                                </Checkbox>
                            )}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-full">
                        <Button
                            type="submit"
                            size='lg'
                            fullWidth
                            className="mt-4 bg-gradient-to-r from-[#F85606] to-[#FF7E3A] text-white font-bold"
                        >
                            Submit Product
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;