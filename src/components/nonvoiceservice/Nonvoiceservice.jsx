import React from 'react'
import './nonvoiceservice.css'
import Tailpiece from '../tailpiece/Tailpiece'
import Bposervicecard from '../bposervicecard/Bposervicecard'
import orderproccessing from './../../asset/orderprocessing.png'
import billing from './../../asset/biling.png'
import transaction from './../../asset/transaction.png'
import customerservice from './../../asset/customerservice.png'
import technicalsupport from './../../asset/technicalsupport.png'
import backofficeservice from './../../asset/backofficeservice.png'
import warehousemanagment from './../../asset/warehousemanagment.png'
import bookkeeping from './../../asset/bookkeeping.png'
import dataentry from './../../asset/dataentry.png'

export default function Nonvoiceservice() {
  return (
    <>
      <div className="wp-otr-voice">
        <h1 className='animate__animated animate__fadeInUp'>NON-VOICE SERVICE</h1>
        <p className='animate__animated animate__zoomIn'>Business Process Outsourcing Non-Voice.</p>
        <p className='animate__animated animate__zoomIn'>In the Business Process Outsourcing or BPO industry, non-voice processes actually entail activities like email marketing, making reports, processing of papers as well as several other activities where the agents are not required to speak to clients/customers. At Alpix Dispatch BPO Services we train our representatives for the non-voice processes by nurturing their other skills apart from the speech skills. Our agents are experts at written communication and we focus on being understood by your customers through chat and email.</p>
        <div className="wp-inr-voice">
          <Bposervicecard
            imageSrc={orderproccessing}
            heading="ORDER PROCESSING"
            paragraph="Alpix Dispatch BPO Services have representatives who are skilled in order processing; we shoulder responsibilities to manage orders till the time an order is delivered to its intended recipient. We make efforts in increasing customer satisfaction through inventory management and procurement management from suppliers of products. We also manage reverse logistics accurately in instances where customers might return the product if they find it damaged or delayed.
            Alpix Dispatch BPO uses high-end software and technologies to keep a track of the orders that were shipped, back orders, returned orders, split orders, sales tax, payments, and other important factors. Our order processing representatives are highly efficient so as to convince customers in being loyal to businesses and making repeat purchase. We help businesses to maintain the right balance between order management and demand."
          />
          <Bposervicecard
            imageSrc={billing}
            heading="BILLING"
            paragraph="Alpix Dispatch BPO Services can be your solution when your payers refuse to meet your obligations, you miss revenue or your bills get lost. We keep your billing accounts updated and also ensure that all payment obligations are met with the aid of innovative technology. Apart from managing clients’ invoices and statements, we also streamline the billing programs efficiently.
            Alpix Dispatch BPO’s billing services are replete with features such as real time payment reporting, monthly accountability, as well as improved customer relations. Our present and innovative billing technology includes regular backup, upgrades, assessment, as well as simple system integrations. We assure our clients that all data that passes through our center are handled with high levels of confidentiality and security."
          />
          <Bposervicecard
            imageSrc={transaction}
            heading="TRANSCRIPTION"
            paragraph="Alpix Dispatch BPO Services has managed to transform efficiency, time as well as investment equations in the legal, medical, audio, media and business industries. Our transcription services are exceptional backed with advanced transcription technology and computer speech recognition. We guarantee our clients increased work flow and productivity levels, minimum turnaround time as well as high levels of accuracy.
            Alpix Dispatch BPO has all the resources essential for catering to a global clientele with an all comprehensive range of online transcription solutions. Our transcription services are cost effective and designed in a manner so that businesses of all sizes and volumes can benefit from them. Our agents are also skilled and trained to handle the changing and challenging transcription demands."
          />
          <Bposervicecard
            imageSrc={customerservice}
            heading="CUSTOMER SERVICE – EMAIL / CHAT BASED"
            paragraph="Alpix Dispatch BPO Services understands that it is crucial to provide customers the liberty to access customer service through the channel most convenient for them. Apart from the telephone, customer service is also offered through live chat and email and Alpix Dispatch excels in these activities. Our highly skilled customer service representatives offer support to customers through live chat and email for enhancing business’ productivity levels, customer retention, conversion rates, and increase growth in businesses.
            Our chat support customer service operations include features like collaborative co-browsing, knowledge based integration, and navigational features to enable customers navigate through customer care offerings. We also offer email support customer service operations as a primary means for customer relationship management and data transmission. Our services are reliable for quality assistance and we can control scale with complexity."
          />
          <Bposervicecard
            imageSrc={technicalsupport}
            heading="TECHNICAL SUPPORT – EMAIL / CHAT BASED"
            paragraph="Alpix Dispatch BPO Services have efficient and tech savvy agents who can offer all the technical assistance customers require regarding clients’ products/services. Our representatives are well trained and specialized in providing technical support over email and live chat. Solutions to technical issues can be explained through the play of words utilizing email and chat support as vehicles, and Alpix Dispatch excels in these activities.
            Our chat and email messages are clear to help customers of different levels of understanding get the messages clearly. We offer you PC software support, printer support, hardware support, legacy system support, and several other forms of tech support through non-voice mechanisms like email and chat. With us technical issues are no issues and your customers do not need to panic; we offer help at hand always."
          />
          <Bposervicecard
            imageSrc={backofficeservice}
            heading="BACK OFFICE SERVICES"
            paragraph="If you are managing a small or a medium size business and you are looking for a solution to outsource your tasks then Back Office Support might be the solution for you. Unlike business Process Outsourcing (BPO) solutions, which allow you to outsource a complete department with standardized tasks, Back Office support allows you to outsource semi-standardized tasks like email and chat support, documentation, data mining, research and report writing, presentation preparation, bookkeeping, financial analysis, website development and support, etc. to an offshore team. The back-office team works with the front-office staff/team in a real-time environment using telephone/chat/email tools. This combination of front and back office services teams allows an organization to reduce cost and improve productivity."
          />
          <Bposervicecard
            imageSrc={warehousemanagment}
            heading="WARE HOUSE MANAGEMENT"
            paragraph="We Ware House Management Support services at two levels: basic and advanced. The difference between the two is the level of expertise. A Basic-level Support associate normally has a bachelor’s degree and is not a specialist in any particular area. The associate provides general purpose support, whether you require ad posting, data entry, creating forms, content updating, etc. An Advance-level Support associate is a specialist who has an ACCA (accounting), MBA, or a Computer Science degree."
          />
          <Bposervicecard
            imageSrc={bookkeeping}
            heading="BOOK KEEPING"
            paragraph="The task of keeping daily financial transactions organized can quickly consume resources and divert organizations from their core business focus. We can help you with your bookkeeping tasks and provide you with a clear financial picture so you can make informed business decisions. We offer both business bookkeeping and personal bookkeeping at competitive rates.
            Properly managed books provide management with clear view of organizations financial health and its potential to support different business activities. While the management needs the top-level view only, the job of keeping the books up-to-date is essential as well. Therefore, we provide you with skilled resources who manage your bookkeeping needs. This allows you and your management to keep focus on the big picture and save some cost at the same time."
          />
          <Bposervicecard
            imageSrc={dataentry}
            heading="DATA ENTRY / DATA MINING"
            paragraph="You may or may not want to be in direct contact with the team working on your data entry or data mining tasks. We assign project managers to every sizable project to ensure accuracy and service quality. For smaller projects, we have our associates work under the supervision of their service mangers to manage client expectations. The service managers ensure that you get quality service.
            Most of our clients are small to medium size businesses that have outsourced either their standardized business processes or semi-standardized back-office operations or both to Kaya Systems. This way they have optimized their cost structure and have achieved the goal of allocating their core resources to their core business processes while we assist them in accomplishing their non-core day-to-day tasks."
          />
        </div>
      </div>
      <Tailpiece />
    </>
  )
}
