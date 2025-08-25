// import Header from '@/components/shared/Header'
// import TransformationForm from '@/components/shared/TransformationForm';
// import { transformationTypes } from '@/constants'
// import { getUserById } from '@/lib/actions/user.actions';
// import { auth } from '@clerk/nextjs';
// import { redirect } from 'next/navigation';

// const AddTransformationTypePage = async ({ params: { type } }: { params: { type: string } }) => {
//   const { userId } = auth();
//   const transformation = transformationTypes[type];

//   if(!userId) redirect('/sign-in')

//   const user = await getUserById(userId);

//   return (
//     <>
//       <Header 
//         title={transformation.title}
//         subtitle={transformation.subTitle}
//       />
    
//       <section className="mt-10">
//         <TransformationForm 
//           action="Add"
//           userId={user._id}
//           type={transformation.type as TransformationTypeKey}
//           creditBalance={user.creditBalance}
//         />
//       </section>
//     </>
//   )
// }

// export default AddTransformationTypePage

import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: { params: { type: string } }) => {
  const authResult = auth();
  const userId = authResult?.userId;
  const transformation = transformationTypes[type as keyof typeof transformationTypes];

  if (!userId) redirect('/sign-in');
  if (!transformation) redirect('/404');

  const user = await getUserById(userId);
  if (!user) redirect('/sign-in'); // or handle gracefully

  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
    
      <section className="mt-10">
        <TransformationForm 
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage