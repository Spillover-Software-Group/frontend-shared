import { useCallback, useState } from 'react'
import { LocalStorageWrapper } from 'apollo3-cache-persist'

import useEventListener from './useEventListener'

// Handles setting 'null' (removing the value).
// SEE: https://github.com/apollographql/apollo-cache-persist/blob/v0.13.0/src/storageWrappers/LocalStorageWrapper.ts#L19
const storage = new LocalStorageWrapper(window.localStorage)

function getStoredValue (key) {
  try {
    const item = storage.getItem(key)

    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error(error)
    return null
  }
}

function storeValue (key, value) {
  try {
    // Allow value to be a function so we have same API as useState.
    const valueToStore =
      value instanceof Function ? value(getStoredValue(key)) : value

    storage.setItem(
      key,
      valueToStore !== null ? JSON.stringify(valueToStore) : null
    )
  } catch (error) {
    console.error(error)
  }

  return value
}

function useLocalStorage (key, initialValue, options = { sync: false }) {
  const [storedValue, setStoredValue] = useState(() => getStoredValue(key) || initialValue)

  const handleStorageEvent = useCallback(
    (e) => {
      if (!e.isTrusted || !options.sync) return

      // Update the state to trigger a rerender
      // if the value changes on another tab.
      if (e.key === key) setStoredValue(JSON.parse(e.newValue))
    },
    [key, setStoredValue]
  )

  useEventListener('storage', handleStorageEvent)

  const setValue = (value) => setStoredValue(storeValue(key, value))

  return [storedValue, setValue]
}

export default useLocalStorage
export { storage, getStoredValue, storeValue }
