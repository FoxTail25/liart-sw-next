import Image from "next/image";
import lb from './aside_left_banner.module.scss'



export default function BannerLeftAside({ textUp, href, srcImg, alt, textdown }) {

    // console.log(textUp)


    return <>
        <a href={href} className={lb.left_banner_block}>
            {
                textUp &&
                <p className={lb.textUp}>
                    {textUp}
                </p>
            }
            <Image
                src={srcImg}
                width={200}
                height={100}
                alt={alt}
            >
            </Image>
            {
                textdown &&
                <p className={lb.textDown}>
                    {textdown}
                </p>
            }
        </a>
        <p/>
    </>
}