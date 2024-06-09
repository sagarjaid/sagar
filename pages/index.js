import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sagar Jaid</title>
        <meta
          name='title'
          content='Sagar Jaid'
        />
        <meta
          name='description'
          content='Sagar Jaid, Official Website. Hustler Hacker and Hipster.'
        />

        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://sagarjaid.com/'
        />
        <meta
          property='og:title'
          content='Sagar Jaid'
        />
        <meta
          property='og:description'
          content='Sagar Jaid, Official Website. Hustler Hacker and Hipster.'
        />
        <meta
          property='og:image'
          content='https://sagarjaid.com/cover.png'
        />
        <meta
          property='twitter:card'
          content='summary_large_image'
        />
        <meta
          property='twitter:url'
          content='https://sagarjaid.com/'
        />
        <meta
          property='twitter:title'
          content='Sagar Jaid'
        />
        <meta
          property='twitter:description'
          content='Sagar Jaid, Official Website. Hustler Hacker and Hipster.'
        />
        <meta
          property='twitter:image'
          content='https://sagarjaid.com/cover.png'
        />

        <meta
          name='google-site-verification'
          content='OZcQv8cI2bp_N6Uq0pBaX5LoGZ44JJtwQZo1iVCLPig'
        />
      </Head>
      <main className="flex flex-col mt-40 mb-20 justify-center items-center gap-5 p-6 bg-[url('/bg.svg')]">
        <div>
          <img
            className='w-[120px]'
            src='./sagar.png'
          />
        </div>
        <div className='flex flex-col justify-center items-center text-center gap-1 '>
          <h1 className='text-xl font-extrabold'>Sagar Jaid</h1>
          <h2>Software Engineer & Indie Hacker</h2>
          {/* <div className='flex justify-center gap-4 mt-1 items-center'>
            <a
              href='https://www.linkedin.com/in/sagarjaid/'
              target='_blank'>
              <img
                className='w-4 h-4'
                src='./linkedin.png'
              />
            </a>
            <a
              href='https://twitter.com/jaid_sagar'
              target='_blank'
              className='pt-1'>
              <img
                className='w-[18px] h-[18px]'
                src='./twitter.png'
              />
            </a>
          </div> */}
        </div>
        <div className='flex flex-col gap-2'>
          {/* <a
            href='http://sagarjaid.com/cv.pdf/'
            target='_blank'
            className='flex gap-1.5 bg-white justify-around items-center max-w-sm border hover:border-gray-400 rounded-md shadow-sm p-2'>
            <img
              className='w-16 h-16'
              src='./chnglog-logo.png'
            />
            <div className='flex flex-col '>
              <h3 className='font-bold'>My Resumne</h3>
              <h4 className='text-[8px]'>
                My long-term goal is to build or be part of a Product-based
                company that can impact millions of lives.
              </h4>
            </div>
            <img
              className='w-10 h-10 p-0.5 hover:scale-105'
              src='./link.svg'
            />
          </a> */}
          <a
            href='http://scripai.com/'
            target='_blank'
            className='flex gap-1.5 bg-white justify-around items-center max-w-sm border hover:border-gray-400 rounded-md shadow-sm p-2'>
            <img
              className='w-16 h-16'
              src='./scripai-logo.png'
            />
            <div className='flex flex-col '>
              <h3 className='font-bold'>ScripAI</h3>
              <h4 className='text-[8px]'>
                FREE 100+ AI copy-tools for marketers and content creators. save
                $30-$60/month on copyai & jasper
              </h4>
            </div>
            <img
              className='w-10 h-10 p-0.5 hover:scale-105'
              src='./link.svg'
            />
          </a>
          <a
            href='http://careerdekho.ai/'
            target='_blank'
            className='flex gap-1.5 bg-white justify-around items-center max-w-sm border hover:border-gray-400 rounded-md shadow-sm p-2'>
            <img
              className='w-16 h-16'
              src='./careerdekho-logo.png'
            />
            <div className='flex flex-col '>
              <h3 className='font-bold'>CareerdekhoAI</h3>
              <h4 className='text-[8px]'>
                AI Career suggestion & career discovery for students and working
                professional
              </h4>
            </div>
            <img
              className='w-10 h-10 p-0.5 hover:scale-105'
              src='./link.svg'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/sagarjaid/'
            target='_blank'
            className='text-center text-gray-400 hover:text-gray-500 text-xs'>
            show more
          </a>
        </div>
        <a
          href='https://www.linkedin.com/in/sagarjaid/'
          target='_blank'
          className='p-2 bg-slate-100 rounded-full'>
          <img
            className='w-6'
            src='./gmail.png'
          />
        </a>
      </main>
    </>
  );
}
