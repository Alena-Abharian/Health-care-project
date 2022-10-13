import React, { useEffect } from 'react';
import CalculatorCaloriesForm from '../../components/calculatorCaloriesForm/CalculatorCaloriesForm';
import { getUser } from '../../redux/user/userOperations';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { getUserData } from '../../redux/user/userSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../components/common/container/Container';
import PictureLeaf from '../../components/common/picture/PictureLeaf';

function CalculatorPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsLoggedIn);
  const userData = useSelector(getUserData);
  // console.log('isAuth', isAuth);
  // console.log('userData', userData);

  // useEffect(() => {
  //   if (isAuth && !userData) {
  //     dispatch(getUser());
  //     // console.log('isAuth1', isAuth);
  //   }
  // }, [dispatch, isAuth, userData]);

  return (
    <>
      <Container>
        <CalculatorCaloriesForm />
      </Container>
      <PictureLeaf />
    </>
  );
}

export default CalculatorPage;
