const validateEmailForm = (state) => {
  let error;
  let result;

  // validate email
  const getInsertedUserEmail = state.email;
  const giveFormatInsertedUserEmail = getInsertedUserEmail.toString().trim().toLowerCase();
  const email = giveFormatInsertedUserEmail;
  const emailLength = email.length > 40;
  const goodEmail = /^(([a-zA-Z0-9 .-_]{2,6})+)@(([a-zA-Z0-9]{2,6})+).([a-z]{2,6})(.[a-z]{2,6})$/;
  const checkedEmailCredential = (!goodEmail.test(email));

  if (state.email.length < 1) {
    error = 'error';
    result = 'email is required';

    const emailClass = 'email-input';
    return {
      emailClass,
      error,
      result
    };
  }

  if (emailLength) {
    error = 'error';
    result = 'invalid email';

    const emailClass = 'email-input';
    return {
      emailClass,
      error,
      result
    };
  }

  if (checkedEmailCredential) {
    error = 'error';
    result = 'invalid email';

    const emailClass = 'email-input';
    return {
      emailClass,
      error,
      result
    };
  }

  error = 'Loading...';
  return { error };
};

const validateFormOne = (state) => {
  let error;
  let result;

  if (state.symptoms.length < 1
    && state.cough.length < 1
    && state.shortness.length < 1
    && state.throat.length < 1
    && state.congestion.length < 1
    && state.hoarse.length < 1) {
    error = 'error';
    result = 'Empty Form';

    const symptomsClass = 'symptoms-input';
    const coughClass = 'cough-input';
    const shortnessClass = 'shortness-input';
    const throatClass = 'throat-input';
    const congestionClass = 'congestion-input';
    const hoarseClass = 'hoarse-input';
    return {
      symptomsClass,
      coughClass,
      shortnessClass,
      throatClass,
      congestionClass,
      hoarseClass,
      error,
      result
    };
  }

  if (state.symptoms.length < 1) {
    error = 'error';
    result = 'symptoms is rquired';

    const symptomsClass = 'symptoms-input';
    return {
      symptomsClass,
      error,
      result
    };
  } if (state.cough.length < 1) {
    error = 'error';
    result = 'cough is rquired';

    const coughClass = 'cough-input';
    return {
      coughClass,
      error,
      result
    };
  } if (state.shortness.length < 1) {
    error = 'error';
    result = 'shortness is rquired';

    const shortnessClass = 'shortness-input';
    return {
      shortnessClass,
      error,
      result
    };
  } if (state.throat.length < 1) {
    error = 'error';
    result = 'throat is rquired';

    const throatClass = 'throat-input';
    return {
      throatClass,
      error,
      result
    };
  } if (state.congestion.length < 1) {
    error = 'error';
    result = 'congestion is rquired';

    const congestionClass = 'congestion-input';
    return {
      congestionClass,
      error,
      result
    };
  } if (state.hoarse.length < 1) {
    error = 'error';
    result = 'hoarse is rquired';

    const hoarseClass = 'hoarse-input';
    return {
      hoarseClass,
      error,
      result
    };
  }

  error = 'Loading...';
  return { error };
};

const validateFormTwo = (state) => {
  let error;
  let result;

  if (state.swallowing.length < 1
      && state.disorder.length < 1
      && state.vomiting.length < 1
      && state.malaise.length < 1
      && state.chills.length < 1
      && state.headache.length < 1) {
    error = 'error';
    result = 'Empty Form';

    const swallowingClass = 'swallowing-input';
    const disorderClass = 'disorder-input';
    const vomitingClass = 'vomiting-input';
    const malaiseClass = 'malaise-input';
    const chillsClass = 'chills-input';
    const headacheClass = 'headache-input';
    return {
      swallowingClass,
      disorderClass,
      vomitingClass,
      malaiseClass,
      chillsClass,
      headacheClass,
      error,
      result
    };
  }

  if (state.swallowing.length < 1) {
    error = 'error';
    result = 'swallowing is required';

    const swallowingClass = 'swallowing-input';
    return {
      swallowingClass,
      error,
      result
    };
  } if (state.disorder.length < 1) {
    error = 'error';
    result = 'disorder is required';

    const disorderClass = 'disorder-input';
    return {
      disorderClass,
      error,
      result
    };
  } if (state.vomiting.length < 1) {
    error = 'error';
    result = 'vomiting is required';

    const vomitingClass = 'vomiting-input';
    return {
      vomitingClass,
      error,
      result
    };
  } if (state.malaise.length < 1) {
    error = 'error';
    result = 'malaise is required';

    const malaiseClass = 'malaise-input';
    return {
      malaiseClass,
      error,
      result
    };
  } if (state.chills.length < 1) {
    error = 'error';
    result = 'chills is required';

    const chillsClass = 'chills-input';
    return {
      chillsClass,
      error,
      result
    };
  } if (state.headache.length < 1) {
    error = 'error';
    result = 'headache is required';

    const headacheClass = 'headache-input';
    return {
      headacheClass,
      error,
      result
    };
  }

  error = 'Loading...';
  return { error };
};

const validateFormThree = (state) => {
  let error;
  let result;

  if (state.travelled.length < 1
      && state.fever.length < 1
      && state.illness.length < 1) {
    error = 'error';
    result = 'Empty Form';

    const travelledClass = 'travelled-input';
    const feverClass = 'fever-input';
    const illnessClass = 'illness-input';

    return {
      travelledClass,
      feverClass,
      illnessClass,
      error,
      result
    };
  }

  if (state.travelled.length < 1) {
    error = 'error';
    result = 'travelled is required';

    const travelledClass = 'travelled-input';
    return {
      travelledClass,
      error,
      result
    };
  } if (state.fever.length < 1) {
    error = 'error';
    result = 'fever is required';

    const feverClass = 'fever-input';
    return {
      feverClass,
      error,
      result
    };
  } if (state.illness.length < 1) {
    error = 'error';
    result = 'illness is required';

    const illnessClass = 'illness-input';
    return {
      illnessClass,
      error,
      result
    };
  }
  error = 'Loading...';
  return { error };
};

export { validateEmailForm, validateFormOne, validateFormTwo, validateFormThree };
