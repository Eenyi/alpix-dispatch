import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isBpoServiceMenuVisible: false,
    isAdminMenuVisible: false,
    isLoginVisible: false,
    isTailpopup: false,
    headerTailpopup: "",
    contentTailpopup: "",
    infoCardDisplay: false,
    infoCardHeader: "",
    infoCardCategory: "",
    telephone: "",
    mail: "",
    username: "",
    password: "",
    sliderPics: [],
    comments: [],
    services: [],
    careerRequests: [],
    contactRequests: [],
    trialRequests: [],
    alertDisplay: false,
    alertText: "",
    alertType: "",
};

const BpoServiceMenuSlice = createSlice({
    name: "BpoServiceMenu",
    initialState,
    reducers: {
        toggleAdminMenu: (state) => {
            state.isAdminMenuVisible = !state.isAdminMenuVisible;
        },
        toggleBpoServiceMenu: (state) => {
            state.isBpoServiceMenuVisible = !state.isBpoServiceMenuVisible;
        },
        toggleLogin: (state) => {
            state.isLoginVisible = !state.isLoginVisible;
        },
        toggleTailpopup: (state, action) => {
            state.isTailpopup = action?.payload?.isTailpopup
            state.headerTailpopup = action?.payload?.headerTailpopup
            state.contentTailpopup = action?.payload?.contentTailpopup
        },
        toggleInfoCard: (state, action) => {
            state.infoCardDisplay = action?.payload?.infoCardDisplay
            state.infoCardHeader = action?.payload?.infoCardHeader
            state.infoCardCategory = action?.payload?.infoCardCategory
        },
        setTelephone: (state, action) => {
            state.telephone = action?.payload;
        },
        setMail: (state, action) => {
            state.mail = action?.payload;
        },
        setAdminCreds: (state, action) => {
            state.username = action?.payload?.username
            state.password = action?.payload?.password
        },
        setSliderPics: (state, action) => {
            state.sliderPics = action?.payload
        },
        appendSliderPic: (state, action) => {
            state.sliderPics.push(action?.payload)
        },
        removeFromSliderPic: (state, action) => {
            const updatedSliderPics = state.sliderPics.filter(
                sliderPic => sliderPic._id.$oid !== action?.payload
            );
            state.sliderPics = updatedSliderPics
        },
        setComments: (state, action) => {
            state.comments = action?.payload
        },
        appendComment: (state, action) => {
            state.comments.push(action?.payload)
        },
        removeFromComments: (state, action) => {
            const updatedComments = state.comments.filter(
                comment => comment._id.$oid !== action?.payload
            );
            state.comments = updatedComments
        },
        setServices: (state, action) => {
            state.services = action?.payload
        },
        appendService: (state, action) => {
            state.services.push(action?.payload)
        },
        removeFromService: (state, action) => {
            const updatedServices = state.services.filter(
                service => service._id.$oid !== action?.payload
            );
            state.services = updatedServices
        },
        setRequests: (state, action) => {
            state.careerRequests = action?.payload?.filter(
                request => request.request_category === "career"
            );
            state.contactRequests = action?.payload?.filter(
                request => request.request_category === "contact"
            );
            state.trialRequests = action?.payload?.filter(
                request => request.request_category === "trial"
            );
        },
        removeFromRequests: (state, action) => {
            if (action?.payload?.category === "career") {
                const updatedCareerRequests = state.careerRequests.filter(
                    request => request._id.$oid !== action?.payload?.id
                );
                state.careerRequests = updatedCareerRequests
            }
            else if (action?.payload?.category === "contact") {
                const updatedContactRequests = state.contactRequests.filter(
                    request => request._id.$oid !== action?.payload?.id
                );
                state.contactRequests = updatedContactRequests
            }
            else if (action?.payload?.category === "trial") {
                const updatedTrialRequests = state.trialRequests.filter(
                    request => request._id.$oid !== action?.payload?.id
                );
                state.trialRequests = updatedTrialRequests
            }
        },
        readFromRequests: (state, action) => {
            if (action?.payload?.category === "career") {
                const index = state.careerRequests.findIndex(
                    careerRequest => careerRequest._id.$oid === action?.payload?.id
                )
                if (index !== -1) {
                    state.careerRequests[index].read = true
                }
            }
            else if (action?.payload?.category === "contact") {
                const index = state.contactRequests.findIndex(
                    contactRequest => contactRequest._id.$oid === action?.payload?.id
                )
                if (index !== -1) {
                    state.contactRequests[index].read = true
                }
            }
            else if (action?.payload?.category === "trial") {
                const index = state.trialRequests.findIndex(
                    trialRequest => trialRequest._id.$oid === action?.payload?.id
                )
                if (index !== -1) {
                    state.trialRequests[index].read = true
                }
            }
        },
        showAlert: (state, action) => {
            state.alertDisplay = action?.payload?.alertDisplay
            state.alertText = action?.payload?.alertText
            state.alertType = action?.payload?.alertType
        }
    },
});

export const {
    toggleBpoServiceMenu,
    toggleAdminMenu,
    toggleLogin,
    toggleTailpopup,
    toggleInfoCard,
    setTelephone,
    setMail,
    setAdminCreds,
    setSliderPics,
    appendSliderPic,
    removeFromSliderPic,
    setComments,
    appendComment,
    removeFromComments,
    setServices,
    appendService,
    removeFromService,
    setRequests,
    removeFromRequests,
    readFromRequests,
    showAlert,
} = BpoServiceMenuSlice.actions;

const store = configureStore({
    reducer: BpoServiceMenuSlice.reducer,
});

export default store;
