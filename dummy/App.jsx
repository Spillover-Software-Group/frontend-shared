import { useForm } from 'react-hook-form'

import { SpilloverProvider, AITextHelpersButton, AITextHelpers, CustomerReport } from '../src'

import './main.css'

const imageURL = 'https://senalysis-media-uploads.s3.us-east-2.amazonaws.com/uploads/media/664262db125beab7f3fb5631.jpg'

const comment = 'Love the place!'

// function App () {
//   const { register, watch } = useForm()

//   const onOptionSelected = (option, type) => {
//     console.log(option, type)
//     const textArea = document.querySelector('textarea')
//     textArea.value = option
//   }

//   return (
//     <div className='sfs-container sfs-mx-auto sfs-flex sfs-flex-col sfs-gap-4'>
//       <form className='sfs-flex sfs-flex-col sfs-gap-4'>
//         <div style={{ height: '400px', textAlign: 'center' }}>
//           <img src={imageURL} alt='Image' className='sfs-h-full' />
//         </div>

//         <div className='sfs-bg-gray-100 sfs-rounded-md' style={{ padding: '10px' }}>
//           {comment}
//         </div>

//         <textarea style={{ height: '100px', width: '100%' }} {...register('text')} />
//       </form>

//       <div className='sfs-flex sfs-flex-row sfs-justify-end' style={{ justifyContent: 'flex-end' }}>
//         <SpilloverProvider mode='development' ownerId='dummy' spilloverBusinessId='dummy'>
//           <AITextHelpersButton
//             message={comment}
//             text={watch('text')}
//             onOptionSelected={onOptionSelected}
//           />
//         </SpilloverProvider>
//       </div>

//       <div style={{ width: '250px' }}>
//         <SpilloverProvider mode='development' ownerId='dummy' spilloverBusinessId='dummy'>
//           <AITextHelpers
//             message={comment}
//             text={watch('text')}
//             onOptionSelected={onOptionSelected}
//           />
//         </SpilloverProvider>
//       </div>
//     </div>
//   )
// }

function App() {
  return (
    <SpilloverProvider mode='development'>
      <div style={{ height: '100%', width: '100%' }}>
        <CustomerReport
          showBusinessSelector
        // businessId='Z2lkOi8vYWNjb3VudHMvQnVzaW5lc3MvNzg'
        // locationId={null}
        // startDate='2024-06-01'
        // endDate='2024-06-05'
        />
      </div>
    </SpilloverProvider>
  )
}

export default App
