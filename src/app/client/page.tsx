'use client'
import { type FC } from 'react';

import { Danger } from '@/shared';

import { SignupForm } from './_widgets';
import { useSignupForm, type SignupData } from './_features';

const getPageState = (isLoading: boolean, formData: SignupData | null): 'loading' | 'error' | 'success' => {
  if (isLoading) {
    return 'loading';
  }
  if (formData) {
    return 'success';
  }
  return 'error';
};

const ClientPage: FC = () => {
  const { isLoading, changeFormData, formData } = useSignupForm();

  return {
    loading: <p>Loading...</p>,
    success: <SignupForm formData={formData as SignupData} changeForm={changeFormData} />,
    error: <Danger>Failed to load data</Danger>,
  }[getPageState(isLoading, formData)];
};

export default ClientPage;
