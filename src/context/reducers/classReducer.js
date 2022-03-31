import initClass from "../initialstates/initClass";

export default (state, { payload, type }) => {
  switch (type) {
    case "CREATE_LOADING": {
      return {
        ...state,
        created: {
          ...state.create,
          loading: true,
        },
      };
    }

    case "CREATE_SUCCESS": {
      return {
        ...state,
        created: {
          ...state.create,
          loading: false,
          data: payload,
        },
      };
    }
    case "CREATE_ERROR": {
      return {
        ...state,
        created: {
          ...state.create,
          loading: false,
          error: payload,
        },
      };
    }

    case "LOGOUT_USER": {
      return {
        ...state,
        initClass,
      };
    }

    case "ADD_CONTACT_LOAD": {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          error: null,
          loading: true,
        },
      };
    }

    case "ADD_CONTACT_ERROR": {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
        },
      };
    }

    case "ADD_CONTACT_SUCCESS": {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          data: payload,
        },

        contacts: {
          ...state.contacts,
          loading: false,
          data: [payload, ...state.contacts.data],
        },
      };
    }

    case "DELETE_CONTACT_LOADING": {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: state.contacts.data.map((item) => {
            if (item.id === payload) {
              return { ...item, deleting: true };
            }
            return item;
          }),
        },
      };
    }

    case "DELETE_CONTACT_SUCCESS": {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: state.contacts.data.filter((item) => item.id !== payload),
        },
      };
    }

    case "SEARCH_CONTACTS": {
      const searchValue = payload?.toLowerCase();
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          isSearchActive: !!payload.length > 0 || false,
          foundContacts: state.contacts.data.filter((item) => {
            try {
              return (
                item.first_name.toLowerCase().search(searchValue) !== -1 ||
                item.last_name.toLowerCase().search(searchValue) !== -1 ||
                item.phone_number.toLowerCase().search(searchValue) !== -1
              );
            } catch (error) {
              return [];
            }
          }),
        },
      };
    }
    default:
      return state;
  }
};
