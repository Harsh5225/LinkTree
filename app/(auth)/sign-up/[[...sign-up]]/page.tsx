import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-bold dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <h1>Welcome to Treebio🌳</h1>
      <p className="mb-4 text-lg font-semibold text-gray-500">
        Please sign up to continue. If you do not have an account, you can create one.
      </p>
      <div className='mt-6'>
     <SignUp />
      </div>
     
    </div>
  )
}
