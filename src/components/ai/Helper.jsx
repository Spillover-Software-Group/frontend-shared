import { useEffect } from 'react'

import { useGenerateAIReply } from '@/hooks/useAI'
import { Icon } from '@/components/icons'
import { Button } from '@/components/buttons'
import Option from './Option'

function Helper ({ type, text, onOptionSelected, loadingMsg, children, autoRun = true, retry = true, n = 1 }) {
  const [generateAIReply, { generatedOptions, loading }] = useGenerateAIReply()

  const run = () => {
    if (text) {
      generateAIReply(type, text, { n })
    }
  }

  useEffect(() => {
    if (autoRun) run()
  }, [])

  return (
    <div className='sfs-w-full sfs-flex sfs-flex-col sfs-gap-4 sfs-py-2 sfs-px-4 sfs-w-full sfs-box-border'>
      {children}

      {loading
        ? (
          <div className='sfs-text-gray-700 sfs-flex sfs-flex-row sfs-items-center sfs-gap-2'>
            <Icon name='spinner' spin />
            {loadingMsg || 'Loading...'}
          </div>
          )
        : (
            retry && (
              <Button
                context='secondary'
                size='sm'
                icon='rotate'
                onClick={run}
              >
                Retry
              </Button>
            )
          )}

      {generatedOptions?.map((option, index) => (
        <Option key={index} option={option} onClick={onOptionSelected} />
      ))}
    </div>
  )
}

export default Helper
