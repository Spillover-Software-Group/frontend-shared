import { MiniApp, Screen } from '@/components/MiniApp'
import GenerateCaption from './GenerateCaption'
import Translate from './Translate'
import SpellCheck from './SpellCheck'
import Summarize from './Summarize'
import ImproveWriting from './ImproveWriting'
import MakeLonger from './MakeLonger'
import MakeShorter from './MakeShorter'
import MakeMoreFormal from './MakeMoreFormal'
import MakeMoreCasual from './MakeMoreCasual'
import ContinueWriting from './ContinueWriting'
import GenerateReviewReply from './GenerateReviewReply'
import GenerateCommentReply from './GenerateCommentReply'

const SCREENS = [
  {
    name: 'GenerateCaption',
    title: 'Generate Caption',
    icon: 'file-text',
    component: GenerateCaption
  },
  {
    name: 'GenerateReviewReply',
    title: 'Generate Reply',
    icon: 'star',
    component: GenerateReviewReply
  },
  {
    name: 'GenerateCommentReply',
    title: 'Generate Reply',
    icon: 'reply',
    component: GenerateCommentReply
  },
  {
    name: 'Translate',
    title: 'Translate',
    icon: 'language',
    component: Translate
  },
  {
    name: 'SpellCheck',
    title: 'Fix Spelling & Grammar',
    icon: 'spell-check',
    component: SpellCheck
  },
  {
    name: 'Summarize',
    title: 'Summarize',
    icon: 'list',
    component: Summarize
  },
  {
    name: 'ImproveWriting',
    title: 'Improve Writing',
    icon: 'feather',
    component: ImproveWriting
  },
  {
    name: 'MakeLonger',
    title: 'Make Longer',
    icon: 'circle-plus',
    component: MakeLonger
  },
  {
    name: 'MakeShorter',
    title: 'Make Shorter',
    icon: 'circle-minus',
    component: MakeShorter
  },
  {
    name: 'MakeMoreFormal',
    title: 'Make More Formal',
    icon: 'user-tie',
    component: MakeMoreFormal
  },
  {
    name: 'MakeMoreCasual',
    title: 'Make More Casual',
    icon: 'face-smile-beam',
    component: MakeMoreCasual
  },
  {
    name: 'ContinueWriting',
    title: 'Continue Writing',
    icon: 'ellipsis',
    component: ContinueWriting
  }
]

const TOOLS = SCREENS.map((screen) => screen.name)

function AITextHelpers ({ message, text, onOptionSelected, onCloseButtonClick, tools }) {
  tools ??= TOOLS

  const screens = SCREENS.filter((screen) => tools.includes(screen.name)).map((screen) => (
    <Screen key={screen.name} title={screen.title} icon={screen.icon}>
      <screen.component message={message} text={text} onOptionSelected={onOptionSelected} />
    </Screen>
  ))

  return (
    <MiniApp title='AI Helpers' icon='wand-magic-sparkles' onCloseButtonClick={onCloseButtonClick}>
      {screens}
    </MiniApp>
  )
}

export default AITextHelpers
