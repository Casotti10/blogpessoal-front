import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Generation | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse as minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <div className='flex gap-2'>
                            <a href="https://www.linkedin.com/in/lucas-casotti-042716290/" target="_blank">
                                <LinkedinLogo size={48} weight='bold' />
                            </a>
                            <a href="https://www.instagram.com/stories/_lucascasotti/" target="_blank">
                                <InstagramLogo size={48} weight='bold' />
                            </a>
                            <a href="https://github.com/Casotti10" target="_blank">
                                <FacebookLogo size={48} weight='bold' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer