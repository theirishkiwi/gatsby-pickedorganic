// @ts-nocheck
//
import React from 'react'
import { useInputChange } from '../components/useInputChange'

export const ControlledComponentWithHooks = () => {
  const [input, handleInputChange] = useInputChange()
 
  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" 
        onChange={handleInputChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="text" name="password" 
        onChange={handleInputChange} />
      </div>
      <input type="submit" />
    </form>
  )
}
