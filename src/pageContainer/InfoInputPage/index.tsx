import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { InputFormItem, StepButton } from '../../components';
import { userInfoFormSchema } from '../../schemas/userInfoFormSchema';
import { STEP, type Step, type userInfoFormType } from '../../types';

interface InfoInputPageProps {
  userInfo: userInfoFormType | null;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoFormType | null>>;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const InfoInputPage = ({ userInfo, setUserInfo, setStep }: InfoInputPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userInfoFormType>({
    resolver: zodResolver(userInfoFormSchema),
    defaultValues: {
      name: userInfo?.name ?? '',
      tel: userInfo?.tel ?? '',
      email: userInfo?.email ?? '',
      major: userInfo?.major ?? '',
    },
  });

  const handleStepBack = () => {
    setStep(STEP.AI_CONVERSION);
  };

  const onSubmit: SubmitHandler<userInfoFormType> = (data) => {
    setUserInfo(data);
    setStep(STEP.THEME_SELECT);
  };

  const inputFields: Array<{
    name: keyof userInfoFormType;
    title: string;
    placeholder: string;
    required: boolean;
  }> = [
    { name: 'name', title: '이름', placeholder: '이름을 입력해주세요', required: true },
    {
      name: 'tel',
      title: '전화번호',
      placeholder: '전화번호를 입력해주세요',
      required: true,
    },
    { name: 'email', title: '이메일', placeholder: '이메일을 입력해주세요', required: false },
    {
      name: 'major',
      title: '전공 / 직함',
      placeholder: '전공 또는 직함을 입력해주세요',
      required: false,
    },
  ] as const;

  return (
    <div className="h-[61.5rem] w-[50rem] rounded-[1.5rem] border-0 bg-white px-[3rem] py-[5rem] shadow-[0_2px_6px_0_rgba(214,214,214,0.25)]">
      <h1 className="text-[2.25rem]/[2.25rem] font-extrabold text-[#222]">명함 정보 입력</h1>
      <p className="mt-4 text-[1.25rem]/[1.875rem] font-medium text-[#666]">
        명함에 들어갈 정보를 입력해주세요.
        <br />
        정보는 따로 저장되지 않으며, 명함에서만 사용됩니다.
      </p>

      <div className="mt-12 flex flex-col gap-[2.25rem]">
        {inputFields.map((field) => (
          <InputFormItem
            key={field.name}
            {...register(field.name)}
            inputTitle={field.title}
            placeholder={field.placeholder}
            errorMessage={errors[field.name]?.message}
            required={field.required}
          />
        ))}
      </div>

      <div className="mt-[4rem] flex items-center justify-end gap-6">
        <StepButton variant="back" onClick={handleStepBack}>
          이전으로
        </StepButton>
        <StepButton variant="next" onClick={handleSubmit(onSubmit)}>
          다음으로
        </StepButton>
      </div>
    </div>
  );
};

export default InfoInputPage;
