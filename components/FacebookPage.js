import Head from "next/head"
export default function FacebookPage({}) {
  return (
    <>
      <div id='fb-root'></div>
      <Head>
        <script
          async
          defer
          crossorigin='anonymous'
          src='https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v9.0&appId=389712018153235&autoLogAppEvents=1'
          nonce='0oncNNAJ'
        ></script>
      </Head>

      <div className='w-full overflow-x-auto my-2'>
        <h3 className='font-display font-semibold text-lg my-2  '>
          ติดตามเราได้ที่ Facebook
        </h3>

        <div
          class='fb-page'
          data-href='https://www.facebook.com/theduckcreatorthailand'
          data-tabs='timeline'
          data-width=''
          data-height=''
          data-small-header='false'
          data-adapt-container-width='true'
          data-hide-cover='false'
          data-show-facepile='true'
        >
          <blockquote
            cite='https://www.facebook.com/theduckcreatorthailand'
            className='fb-xfbml-parse-ignore'
          >
            <a href='https://www.facebook.com/theduckcreatorthailand'>
              The Duck Creator
            </a>
          </blockquote>
        </div>
      </div>
    </>
  )
}
