'use client'
import { type FC } from 'react';

import { Danger } from '@/shared/ui/Danger/Danger';
import { Loader } from '@/shared/ui/Loader/Loader';

import { SignupForm } from './_widgets/SignupForm/SignupForm';
import { useSignupForm, type SignupData } from './_features/useFormData';

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
  const { isLoading, changeFormData, formData } = useSignupForm(true);

  return {
    loading: <Loader title="Client" />,
    success: <SignupForm formData={formData as SignupData} changeForm={changeFormData} />,
    error: <Danger>Failed to load data</Danger>,
  }[getPageState(isLoading, formData)];
};

export default ClientPage;
