import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { useGenerateAIReply } from '@/hooks/useAI'
import { Button } from '@/components/buttons'
import Option from './Option'

const schema = z.object({
  context: z.string().min(5, 'Please provide some more context')
})

function GenerateCaption ({ onOptionSelected }) {
  const [generateAIReply, { generatedOptions, loading }] = useGenerateAIReply()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = ({ context }) => generateAIReply('post_caption', context, { n: 3 })

  // TODO: Remove all hashtags from the end
  const options = (generatedOptions || [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='sfs-flex sfs-flex-col sfs-gap-4 sfs-py-2 sfs-px-4 sfs-w-full sfs-box-border'>
      <div className='sfs-w-full sfs-flex sfs-flex-col sfs-gap-1'>
        <label className='sfs-text-sm sfs-text-gray-700'>Give us some context...</label>
        <div className='sfs-w-full sfs-flex sfs-flex-col sfs-gap-4'>
          <textarea className='sfs-box-border sfs-w-full sfs-h-20 sfs-border sfs-border-gray-300 sfs-rounded-md sfs-p-2' {...register('context')} autoFocus />
        </div>
        {errors.context && <div className='sfs-text-red-500 sfs-text-sm'>{errors.context.message}</div>}
      </div>

      <Button
        type='submit'
        disabled={loading}
        context='primary'
        icon='wand-magic-sparkles'
        loading={loading}
      >
        Generate Caption
      </Button>

      {options.length > 0 && (
        <div className='sfs-w-full sfs-flex sfs-flex-col sfs-gap-4 sfs-mt-4'>
          <div className='sfs-text-gray-700'>Pick an option or try again for new options</div>

          {options.map((option, index) => (
            <Option key={index} option={option} onClick={onOptionSelected} />
          ))}
        </div>
      )}
    </form>
  )
}

export default GenerateCaption
