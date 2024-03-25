import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
    addFeatureSection,
    addFeatureSubSection,
    updateSectionName,
    updateSubSection,
    deleteFeatureSection,
    deleteFeatureSubSection,
} from "./featureContentSlice";

function App() {
    const dispatch = useDispatch();
    const sections = useSelector((state) => state.sections);
    const [sectionNameInputs, setSectionNameInputs] = useState({}); // State to track input for sectionName
    const [subSectionInputs, setSubSectionInputs] = useState({}); // State to track inputs for subSections

    const addSection = () => {
        dispatch(addFeatureSection());
    };

    const addSubSection = (sectionId) => {
        dispatch(addFeatureSubSection({ sectionId }));
    };

    const handleSectionNameChange = (e, sectionId) => {
        const updatedInputs = { ...sectionNameInputs };
        updatedInputs[sectionId] = e.target.value;
        setSectionNameInputs(updatedInputs);
        dispatch(updateSectionName({ sectionId, sectionName: e.target.value }));
    };

    const handleSubSectionChange = (e, sectionId, subSectionId) => {
        const updatedSubSectionInputs = { ...subSectionInputs };
        updatedSubSectionInputs[subSectionId] = e.target.value;
        setSubSectionInputs(updatedSubSectionInputs);
        // Preserve the existing image data
        const existingImageData = sections
            .find((section) => section.id === sectionId)
            ?.subSections.find(
                (subSection) => subSection.id === subSectionId
            )?.image;
        dispatch(
            updateSubSection({
                sectionId,
                subSectionId,
                image: existingImageData,
                heading: e.target.value,
            })
        );
    };

    const deleteSection = (sectionId) => {
        dispatch(deleteFeatureSection({ sectionId }));
    };

    const deleteSubSection = (sectionId, subSectionId) => {
        dispatch(deleteFeatureSubSection({ sectionId, subSectionId }));
    };

    // const handleImageChange = (e, sectionId, subSectionId) => {
    //   const file = e.target.files[0];
    //   if (file) { // Check if a file was selected
    //     const reader = new FileReader();
    //     reader.onload = function (event) {
    //       dispatch(updateSubSection({ sectionId, subSectionId, image: event.target.result, heading: subSectionInputs[subSectionId] || "" }));
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // }

    const handleImageChange = (e, sectionId, subSectionId) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                dispatch(
                    updateSubSection({
                        sectionId,
                        subSectionId,
                        image: event.target.result,
                        heading: subSectionInputs[subSectionId] || "",
                    })
                );
            };
            reader.readAsDataURL(file);
        } else {
            // Retain the existing image if no new image is selected
            const existingImage = sections
                .find((section) => section.id === sectionId)
                ?.subSections.find(
                    (subSection) => subSection.id === subSectionId
                )?.image;
            dispatch(
                updateSubSection({
                    sectionId,
                    subSectionId,
                    image: existingImage,
                    heading: subSectionInputs[subSectionId] || "",
                })
            );
        }
    };

    return (
        <div className="container mx-auto p-4">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={addSection}
            >
                Add Section
            </button>
            {sections.map((section) => (
                <div
                    key={section.id}
                    className="section mt-4 p-4 border border-gray-300 rounded"
                >
                    <h2 className="text-xl font-bold mb-2">
                        {section.sectionName}
                    </h2>{" "}
                    {/* Display section name as heading */}
                    <div className="section-header flex justify-between items-center">
                        <input
                            type="text"
                            className="input-field border rounded py-2 px-4 mr-2"
                            value={
                                sectionNameInputs[section.id] ||
                                section.sectionName
                            }
                            onChange={(e) =>
                                handleSectionNameChange(e, section.id)
                            }
                            placeholder="Enter section name"
                        />
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => addSubSection(section.id)}
                        >
                            Add SubSection
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-1"
                            onClick={() => deleteSection(section.id)}
                        >
                            Delete Section
                        </button>{" "}
                        {/* Button to delete section */}
                    </div>
                    <div className="section-info mt-2">
                        <div className="mr-2 text-sm">
                            Section ID: {section.id}
                        </div>
                    </div>
                    {section.subSections.map((subSection) => (
                        <div
                            key={subSection.id}
                            className="subsection mt-4 p-4 border border-gray-300 rounded"
                        >
                            <h3 className="text-lg font-bold mb-2">
                                {subSectionInputs[subSection.id] ||
                                    subSection.heading}
                            </h3>{" "}
                            {/* Display subsection name as heading */}
                            {/* <input type="file" className="image-input-label mb-2" onChange={(e) => handleImageChange(e, section.id, subSection.id)} />
                             */}
                            <div className="flex justify-between items-center">
                                <div className="relative mb-5">
                                    <input
                                        type="file"
                                        className="hidden"
                                        id={`image-input-${section.id}-${subSection.id}`}
                                        onChange={(e) =>
                                            handleImageChange(
                                                e,
                                                section.id,
                                                subSection.id
                                            )
                                        }
                                    />
                                    <label
                                        htmlFor={`image-input-${section.id}-${subSection.id}`}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                                    >
                                        Add Image
                                    </label>
                                </div>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-5"
                                    onClick={() =>
                                        deleteSubSection(
                                            section.id,
                                            subSection.id
                                        )
                                    }
                                >
                                    Delete SubSection
                                </button>
                            </div>
                            <input
                                type="text"
                                className="subsection-input border rounded py-2 px-4 mb-2"
                                value={
                                    subSectionInputs[subSection.id] ||
                                    subSection.heading
                                }
                                onChange={(e) =>
                                    handleSubSectionChange(
                                        e,
                                        section.id,
                                        subSection.id
                                    )
                                }
                                placeholder="Enter subsection name"
                            />
                            <div className="subsection-info flex items-center">
                                <div className="mr-2 text-sm">
                                    Subsection ID: {subSection.id}
                                </div>
                            </div>
                            {/* <img className="image-preview mt-2" src={subSection.image} alt='img' /> */}
                            <div className="relative max-w-[500px]">
                                <img
                                    className="image-preview mt-2 aspect-[3/1] object-cover"
                                    src={subSection.image}
                                    alt="img"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default App;

// Vatsal





