import React from 'react'
import './deliverDetails.css'
import question from '../../assetes/question.jpg'

const DeliverDetails = ({ t }) => {
  return (
    <>
      <div className='secondSectionDeliveryDetails'>
        <div className='detailsPackageContainer'>
          <div className='packageInfoTitle'>{t('deliverAddress')}</div>
          <div className='addressInfo addressInfoBG'>امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22 ,,cairo,</div>
        </div>

        <div className='detailsPackageContainer questionContainerImage addressInfo'>
          <div className=''> < img src={question} alt='question' className='imageSizeQuestion' /></div>
          <div className='firstContainerDeliver'>
            <div className='packageInfoTitle'>{t('dispatchQuestion')}</div>
            <div>
              <button className='dispatchAnProblem'>
                {t('dispatchIssue')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeliverDetails