import { gql } from '@apollo/client'
import { toast } from 'react-toastify'

import useOptions from './useOptions'
import { useEngageMutation } from './useEngage'

const GENERATE_REPLY_MUTATION = gql`
  mutation GenerateAIReply($senalysisBusinessId: String, $spilloverBusinessId: String, $message: String!, $type: String!, $n: Int) {
    generateAiReply(input: {
      senalysisBusinessId: $senalysisBusinessId,
      spilloverBusinessId: $spilloverBusinessId,
      message: $message,
      type: $type,
      n: $n
    }) {
      replies
      errors {
        message
      }
    }
  }
`
function useGenerateAIReply () {
  const { senalysisBusinessId, spilloverBusinessId } = useOptions()

  const [generateAIReply, status] = useEngageMutation(GENERATE_REPLY_MUTATION)

  status.generatedOptions = status.data?.generateAiReply?.replies

  const run = async (type, message, options = { n: 1 }) => {
    try {
      const { data } = await generateAIReply({
        variables: {
          type,
          message,
          senalysisBusinessId,
          spilloverBusinessId,
          n: options.n
        }
      })

      const errors = data?.generateAiReply.errors || []

      errors.forEach((error) => {
        console.error(`AI Error: ${error.message}`)
        toast.error(error.message, { position: 'bottom-right' })
      })

      return data.generateAiReply.replies
    } catch (error) {
      return null
    }
  }

  return [
    run,
    status
  ]
}

export { useGenerateAIReply }
