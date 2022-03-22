import { createSlice } from "@reduxjs/toolkit"
import {addCandidate, getCandidates, updateCandidate, deleteCandidate } from './candidate'

const initialState = {
    candidates: [],
    addCandidateStatus: "",
    addCandidateError: "",
    getCandidatesStatus: "",
    getCandidatesError: "",
    deleteCandidateStatus: "",
    deleteCandidateError: "",
    updateCandidateStatus: "",
    updateCandidateError: "",
}

const candidatesSlice = createSlice({
    name: "candidates",
    initialState,
    reducers: {},
    extraReducers: {
        [candidatesAdd.pending]: (state, action) => {
            return {
                ...state,
                addCandidateStatus: "pending",
                addCandidateError: "",
                getCandidatesStatus: "",
                getCandidatesError: "",
                deleteCandidateStatus: "",
                deleteCandidateError: "",
                updateCandidateStatus: "",
                updateCandidateError: "",
            }
        },
        [addCandidate.fulfilled]: (state, action) => {
            // state.candidates.push(action.payload);
            return {
                ...state,
                candidates: [action.payload, ...state.candidates],
                addCandidateStatus: "success",
                addCandidateError: "",
                getCandidatesStatus: "",
                getCandidatesError: "",
                deleteCandidateStatus: "",
                deleteCandidateError: "",
                updateCandidateStatus: "",
                updateCandidateError: "",
            }
        },
        [addCandidate.rejected]: (state, action) => {
            return {
                ...state,
                addCandidateStatus: "rejected",
                addCandidateError: action.payload,
                getCandidatesStatus: "",
                getCandidatesError: "",
                deleteCandidateStatus: "",
                deleteCandidateError: "",
                updateCandidateStatus: "",
                updateCandidateError: "",
            }
        },
        [getCandidates.pending]: (state, action) => {
            return {
                ...state,
                addCandidateStatus: "",
                addCandidateError: "",
                getCandidatesStatus: "pending",
                getCandidatesError: "",
                deleteCandidateStatus: "",
                deleteCandidateError: "",
                updateCandidateStatus: "",
                updateCandidateError: "",
            }
        },
        [getCandidates.fulfilled]: (state, action) => {
            return {
                ...state,
                candidates: action.payload,
                addCandidateStatus: "",
                addCandidateError: "",
                getCandidatesStatus: "success",
                getCandidatesError: "",
                deleteCandidateStatus: "",
                deleteCandidateError: "",
                updateCandidateStatus: "",
                updateCandidateError: "",
            }
        },
        [getCandidates.rejected]: (state, action) => {
            return {
                ...state,
                addCandidateStatus: "",
                addCandidateError: "",
                getCandidatesStatus: "rejected",
                getCandidatesError: action.payload,
                deleteCandidateStatus: "",
                deleteCandidateError: "",
                updateCandidateStatus: "",
                updateCandidateError: "",
            }
        },
        [deleteCandidate.pending]: (state, action) => {
            return {
                ...state,
                addCandidateStatus: "",
                addCandidateError: "",
                getCandidatesStatus: "",
                getCandidatesError: "",
                deleteCandidateStatus: "pending",
                deleteCandidateError: "",
                updateCandidateStatus: "",
                updateCandidateError: "",
            }
        },
        [deleteCandidate.fulfilled]: (state, action) => {
            const currentCandidates = state.candidates.filter(
                (candidate) => candidate._id !== action.payload._id
            )
            return {
                ...state,
                candidates: currentCandidates,
                addCandidateStatus: "",
                addCandidateError: "",
                getCandidatesStatus: "",
                getCandidatesError: "",
                deleteCandidateStatus: "success",
                deleteCandidateError: "",
                updateCandidateStatus: "",
                updateCandidateError: "",
            }
        },
        [deleteCandidate.rejected]: (state, action) => {
            state = {
                ...state,
                addCandidateStatus: "",
                addCandidateError: "",
                getCandidatesStatus: "",
                getCandidatesError: "",
                deleteCandidateStatus: "rejected",
                deleteCandidateError: action.payload,
                updateCandidateStatus: "",
                updateCandidateError: "",
            }
        },
        [updateCandidate.pending]: (state, action) => {
            return {
                ...state,
                addCandidateStatus: "",
                addCandidateError: "",
                getCandidatesStatus: "",
                getCandidatesError: "",
                deleteCandidateStatus: "",
                deleteCandidateError: "",
                updateCandidateStatus: "pending",
                updateCandidateError: "",
            }
        },
        [updateCandidate.fulfilled]: (state, action) => {
            const updatedCandidates = state.candidates.map((candidate) =>
                candidate._id === action.payload._id ? action.payload : candidate
            )
            return {
                ...state,
                candidates: updatedCandidates,
                addCandidateStatus: "",
                addCandidateError: "",
                getCandidatesStatus: "",
                getCandidatesError: "",
                deleteCandidateStatus: "",
                deleteCandidateError: "",
                updateCandidateStatus: "success",
                updateCandidateError: "",
            }
        },
        [updateCandidate.rejected]: (state, action) => {
            return {
                ...state,
                addCandidateStatus: "",
                addCandidateError: "",
                getCandidatesStatus: "",
                getCandidatesError: "",
                deleteCandidateStatus: "",
                deleteCandidateError: "",
                updateCandidateStatus: "rejected",
                updateCandidateError: action.payload,
            }
        },
    },
})

export default candidatesSlice.reducer