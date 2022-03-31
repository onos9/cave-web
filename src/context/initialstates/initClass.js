import classList from '../../data/schema/classes.json'
import subjects from '../../data/schema/subjects.json';
import assessments from '../../data/schema/assessment.json';
import gradingSystem from '../../data/schema/gradingSystem.json';
import ratingSystem from '../../data/schema/ratingSystem.json';

export default {
  settings: { classList, subjects, assessments, gradingSystem, ratingSystem },
  all: {
    loading: false,
    error: null,
    data: [],
    isSearchActive: false,
    foundClasses: [],
  },
  created: {
    loading: false,
    error: null,
    data: null,
  },
  get: {
    loading: false,
    error: null,
    data: null,
  },
  updated: {
    loading: false,
    error: null,
    data: null,
  },
  deleted: {
    loading: false,
    error: null,
    data: null,
  },
};
