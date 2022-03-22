import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const baseURL = "http://localhost:5000/api/"

export const addCandidate = createAsyncThunk(
    "candidates/addCandidate",
    async (candidate, { rejectWithValue }) => {
        try
        {
            const response = await axios.post(baseURL + "candidates", candidate)
            return response.data
        } catch (error)
        {
            console.log(error)
            return rejectWithValue(error.response?.data)
        }
    }
)

export const getCandidates = createAsyncThunk(
    "candidates/getCandidates",
    async (id = null, { rejectWithValue }) => {
        try
        {
            const response = await axios.get(baseURL + "candidates")
            return response.data
        } catch (error)
        {
            console.log(error)
            return rejectWithValue(error.response?.data)
        }
    }
)

export const deleteCandidate = createAsyncThunk(
    "candidates/deleteCandidate",
    async (id, { rejectWithValue }) => {
        try
        {
            const response = await axios.delete(baseURL + "candidates/")
            return response.data
        } catch (error)
        {
            console.log(error)
            return rejectWithValue(error.response?.data)
        }
    }
)

export const updateCandidate = createAsyncThunk(
    "candidates/updateCandidate",
    async (candidate, { rejectWithValue }) => {
        try
        {
            const { _id, task, author, isComplete, date, uid } = candidate

            const response = await axios.put(baseURL + "candidates/" + _id, {
                task,
                author,
                isComplete,
                date,
                uid,
            })
            return response.data
        } catch (error)
        {
            console.log(error)
            return rejectWithValue(error.response?.data)
        }
    }
)
