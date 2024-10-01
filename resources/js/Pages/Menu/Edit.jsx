import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import InputFile from "@/Components/InputFile";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import TextInputArea from "@/Components/TextInputArea";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Head, usePage, Link, useForm, router } from "@inertiajs/react";

export default function Edit({ errors, menu }) {
    // const user = usePage().props.auth.user;

    const [values, setValues] = useState({
        name: menu.name,
        description: menu.description,
        photo: null,
        price: menu.price,
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.put(`/menu/update/`, values);
        console.log(values);
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Edit Menu
                </h2>
            }
        >
            <Head title="Edit Menu" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                                <div className="max-w-2xl mx-auto">
                                    <div className="text-center">
                                        <h2 className="text-xl font-bold text-gray-800 sm:text-3xl dark:text-white">
                                            Edit Menu
                                        </h2>
                                    </div>

                                    <div className="relative z-10 p-4 mt-5 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
                                        <form onSubmit={handleSubmit}>
                                            {/* Menu Name */}
                                            <div className="mb-4 sm:mb-8">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="name"
                                                        value="Menu Name"
                                                    />

                                                    <TextInput
                                                        id="name"
                                                        className="block w-full mt-1"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        required
                                                        isFocused
                                                        autoComplete="name"
                                                    />

                                                    <InputError
                                                        className="mt-2"
                                                        message={errors.name}
                                                    />
                                                </div>
                                            </div>
                                            {/* end Menu Name */}

                                            {/* Description */}
                                            <div className="mb-4 sm:mb-8">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="description"
                                                        value="Description"
                                                    />

                                                    <TextInputArea
                                                        isFocused={false}
                                                        className=""
                                                        placeholder=""
                                                        value={
                                                            values.description
                                                        }
                                                        onChange={handleChange}
                                                    />

                                                    <InputError
                                                        className="mt-2"
                                                        message={
                                                            errors.description
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            {/* end Description */}

                                            {/* upload photo */}
                                            <div className="mb-4 sm:mb-8">
                                                <div>
                                                    <InputLabel value="Upload Photo" />
                                                    <InputFile
                                                        onChange={(e) =>
                                                            setData(
                                                                "photo",
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                    />

                                                    <InputError
                                                        className="mt-2"
                                                        message={errors.photo}
                                                    />
                                                </div>
                                            </div>
                                            {/* end upload photo */}

                                            {/* Price */}
                                            <div className="mb-4 sm:mb-8">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="price"
                                                        value="Price"
                                                    />

                                                    <TextInput
                                                        id="price"
                                                        type="number"
                                                        className="block w-full mt-1"
                                                        value={values.price}
                                                        onChange={handleChange}
                                                        required
                                                        autoComplete="name"
                                                    />

                                                    <InputError
                                                        className="mt-2"
                                                        message={errors.price}
                                                    />
                                                </div>
                                            </div>
                                            {/* end Price */}

                                            <div className="grid mt-6">
                                                <PrimaryButton>
                                                    Edit
                                                </PrimaryButton>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
