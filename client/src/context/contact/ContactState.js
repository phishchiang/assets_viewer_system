import React, { useReducer } from "react";
import axios from "axios";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_CONTACT,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_DATA,
  GET_CURRENT_SEL_CONTACTS
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null,
    myGetData: null,
    currentSelContact: []
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get my current selected contact
  const getCurrentContact = contact => {
    dispatch({
      type: GET_CURRENT_SEL_CONTACTS,
      payload: contact
    });
  };

  // my GET DATA TEST
  const getData = async () => {
    const back = await fetch("https://jsonplaceholder.typicode.com/posts");
    const back_json = await back.json();
    console.log(back_json);

    dispatch({
      type: GET_DATA,
      payload: back_json
    });
  };

  // Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get("api/contacts");

      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });
    }
  };

  // Add contact
  const addContact = async contact => {
    // Generate dummy id
    // contact.id = uuid.v4();
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    try {
      const res = await axios.post("api/contacts", contact, config);

      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });
    }

    // dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete contact
  const deleteContact = async id => {
    try {
      await axios.delete(`/api/contacts/${id}`);

      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });
    }
  };

  // Update contact
  const updateContact = async contact => {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    try {
      const res = await axios.put(
        `api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });
    }
  };

  // Clear contact
  const clearContact = () => {
    dispatch({ type: CLEAR_CONTACT });
  };

  // Set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter conatacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        getContacts,
        clearContact,
        myGetData: state.myGetData,
        getData,
        currentSelContact: state.currentSelContact,
        getCurrentContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
