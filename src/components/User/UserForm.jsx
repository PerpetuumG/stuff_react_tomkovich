import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserSingupForm from './UserSingupForm';
import UserLoginForm from './UserLoginForm';

import { toggleForm, toggleFormType } from '../../features/user/userSlice';

import styles from '../../styles/User.module.css';

function UserForm(props) {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));
  const toggleCurrentFormType = type => dispatch(toggleFormType(type));

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      {formType === 'signup' ? (
        <UserSingupForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
      ) : (
        <UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
      )}
    </>
  ) : (
    <></>
  );
}

export default UserForm;
