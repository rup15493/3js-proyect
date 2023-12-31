import React from 'react'
import CustomButton from './CustomButton'

const AiPicker = ({prompt,setPrompt,generatingImg,handleSubmit}) => {
  return (
    <div className='aipicker-container'>

      <textarea 
      placeholder='Ask AI....'
      className='aipicker-textarea'
      rows={5}
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      />

      <div className='flex flex-wrap gap-3'>

        {generatingImg ? (

          <CustomButton 
          type="outline"
          title="Asking AI..."
          customStyles="text-xs"
          />
        ) : (
          <>
          
          <CustomButton 
          
          type="outline"
          title=" Ai Logo"
          handleClick={() => handleSubmit("logo")}
          customStyles="text-xs"
          
          />
          
          <CustomButton 
          
          type="fill"
          title=" Ai FULL"
          handleClick={() => handleSubmit("full")}
          customStyles="text-xs"
          
          />
          
          </>
        )

        
        }

      </div>

    </div>
  )
}

export default AiPicker