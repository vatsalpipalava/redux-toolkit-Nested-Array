import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    sections: [
        {
            id: nanoid(),
            sectionName: "Products",
            subSections: [
                {
                    id: nanoid(),
                    image: "data:image/jpeg;base64,/9j/4QBMRXhpZgAASUkqAAgAAAABAJiCAgAnAAAAGgAAAAAAAABGcmVlcGlrIENvbXBhbnkgUy5MLiAtIHd3dy5mcmVlcGlrLmNvbQAAAAD/7AARRHVja3kAAQAEAAAAZAAA/+EDwWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNBMzJDQjA1RDNDODExRUVBNzM5RUEzRjk1MEVDNDY1IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNBMzJDQjA0RDNDODExRUVBNzM5RUEzRjk1MEVDNDY1IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMDIwIFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNjYzQzMzNDZDOEU4NEExQzc0NDk3MzBBN0UxMTdFMUYiIHN0UmVmOmRvY3VtZW50SUQ9IjY2M0MzMzQ2QzhFODRBMUM3NDQ5NzMwQTdFMTE3RTFGIi8+IDxkYzpyaWdodHM+IDxyZGY6QWx0PiA8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",
                    heading: "PHeading",
                },
            ],
        },
    ],
};

export const featureContentSlice = createSlice({
    name: "section",
    initialState,
    reducers: {
        addFeatureSection: (state) => {
            const section = {
                id: nanoid(),
                sectionName: "",
                subSections: [
                    {
                        id: nanoid(),
                        image: null,
                        heading: "",
                    },
                ],
            };
            state.sections.push(section);
        },
        addFeatureSubSection: (state, action) => {
            const { sectionId } = action.payload;
            const section = state.sections.find(
                (section) => section.id === sectionId
            );
            if (section) {
                const subSection = {
                    id: nanoid(),
                    image: null,
                    heading: "",
                };
                section.subSections.push(subSection);
            }
        },
        updateSectionName: (state, action) => {
            const { sectionId, sectionName } = action.payload;
            const section = state.sections.find(
                (section) => section.id === sectionId
            );
            if (section) {
                section.sectionName = sectionName;
            }
        },
        updateSubSection: (state, action) => {
            const { sectionId, subSectionId, image, heading } = action.payload;
            const section = state.sections.find(
                (section) => section.id === sectionId
            );
            if (section) {
                const subSection = section.subSections.find(
                    (subSection) => subSection.id === subSectionId
                );
                if (subSection) {
                    subSection.image = image;
                    subSection.heading = heading;
                }
            }
        },
        deleteFeatureSection: (state, action) => {
            const { sectionId } = action.payload;
            state.sections = state.sections.filter(
                (section) => section.id !== sectionId
            );
        },
        deleteFeatureSubSection: (state, action) => {
            const { sectionId, subSectionId } = action.payload;
            const section = state.sections.find(
                (section) => section.id === sectionId
            );
            if (section) {
                section.subSections = section.subSections.filter(
                    (subSection) => subSection.id !== subSectionId
                );
            }
        },
    },
});

export const {
    addFeatureSection,
    addFeatureSubSection,
    updateSectionName,
    updateSubSection,
    deleteFeatureSection,
    deleteFeatureSubSection,
} = featureContentSlice.actions;

export default featureContentSlice.reducer;

// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     sections: [
//         {
//             id: nanoid(),
//             sectionName: "Products",
//             subSections: [
//                 {
//                     id: nanoid(),
//                     image: "PImg",
//                     heading: "PHeading"
//                 }
//             ]
//         }
//     ]
// }

// export const featureContentSlice = createSlice({
//     name: "section",
//     initialState,
//     reducers: {
//         addFeatureSection: (state) => {
//             const section = {
//                 id: nanoid(),
//                 sectionName: "vatsal",
//                 subSections: [
//                     {
//                         id: nanoid(),
//                         image: "",
//                         heading: ""
//                     }
//                 ]
//             };
//             state.sections.push(section);
//         },
//         addFeatureSubSection: (state, action) => {
//             const { sectionId } = action.payload;
//             const section = state.sections.find(section => section.id === sectionId);
//             if (section) {
//                 const subSection = {
//                     id: nanoid(),
//                     image: "",
//                     heading: ""
//                 };
//                 section.subSections.push(subSection);
//             }
//         }
//     }
// });

// export const { addFeatureSection, addFeatureSubSection } = featureContentSlice.actions;

// export default featureContentSlice.reducer;