"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const tags = [
    {
        name: "Web Design",
        path: "/",
    },
    {
        name: "Social Media",
        path: "/",
    },
    {
        name: "Product",
        path: "/",
    },
];

const social = [
    {
        icon: "fab fa-github",
        color: "facebook-color",
        path: "/",
    },
    {
        icon: "fab fa-twitter",
        color: "twitter-color",
        path: "/",
    },
    {
        icon: "fab fa-google-plus-g",
        color: "google-color",
        path: "/",
    },
    {
        icon: "fab fa-linkedin-in",
        color: "linkedin-color",
        path: "/",
    },
];

export default function BlogAreaModal() {
    const { blogInfo } = useSelector((state) => state.blog);

    if (!blogInfo) return null;

    return (
        <div
            className="modal fade"
            id="exampleModal-b1"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModal-b1"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="close-icon float-right pt-10 pr-10">
                        <button
                            type="button"
                            className="close d-inline-block"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">
                                <i className="fa fa-times" />
                            </span>
                        </button>
                    </div>
                    <div className="modal-content border-0">
                        <div className="modal-body pl-50 pr-50 pt-10 pb-50">
                            <div className="blog-modal-img">
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vw"
                                    className="w-100 h-100"
                                    src={blogInfo?.imgUrl}
                                    alt="blog post image 02"
                                />
                            </div>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-12">
                                    <div className="content-wrapper">
                                        <h2 className="modal-title text-center">
                                            Lets make the begging to mankind to
                                            save the world again
                                        </h2>
                                        <ul className="blog-meta text-center mb-30">
                                            <li>
                                                <Link
                                                    href="/"
                                                    className="meta-text-color openS-font-family"
                                                >
                                                    <span className="theme-color mr-1">
                                                        <i className="fas fa-folder-open" />
                                                    </span>
                                                    {blogInfo?.category}
                                                </Link>
                                            </li>
                                            <li>
                                                <span className="meta-text-color openS-font-family d-block">
                                                    <span className="theme-color mr-1">
                                                        <i className="fas fa-calendar-alt" />
                                                    </span>
                                                    June, 21, 2022
                                                </span>
                                            </li>
                                            <li>
                                                <span className="meta-text-color openS-font-family d-block">
                                                    <span className="theme-color mr-1">
                                                        <i className="fas fa-clock" />
                                                    </span>
                                                    10 min
                                                </span>
                                            </li>
                                        </ul>

                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Debitis ut recusandae assumenda.
                                            Nisi quaerat porro inventore ullam
                                            magnam beatae enim cumque. Facilis
                                            in maxime quos praesentium
                                            cupiditate cum commodi recusandae!
                                        </p>
                                        <p>
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Minus
                                            eos ipsam enim perspiciatis
                                            doloremque laborum dolor nihil
                                            aperiam vel necessitatibus unde
                                            cupiditate error eum maiores,
                                            sapiente ea. Quisquam sed, molestias
                                            veniam adipisci magnam ratione
                                            aspernatur delectus a assumenda,
                                            corrupti libero commodi eaque quis
                                            vel consequatur reiciendis dolor
                                            beatae distinctio voluptatum ducimus
                                            non optio. Deleniti nobis eius,
                                            nihil incidunt voluptate labore,
                                            debitis ducimus perspiciatis rerum
                                            iure doloremque minus omnis nostrum!
                                            Voluptatibus mollitia voluptate ipsa
                                            nesciunt animi blanditiis aliquam
                                            repellat quibusdam enim eos veniam
                                            similique tempora nihil optio, iure
                                            necessitatibus hic ipsum nisi
                                            maiores perspiciatis magni? Sed vero
                                            amet quidem natus consectetur!
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Quod
                                            ex dolorum aut accusantium, fugit
                                            sunt vero animi quos porro
                                            excepturi. Quia delectus nulla
                                            voluptatem unde incidunt. Magnam
                                            natus officiis saepe.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. A
                                            aspernatur reiciendis corporis
                                            deleniti beatae? At, inventore
                                            necessitatibus repellat alias
                                            tenetur quisquam nam maiores
                                            eligendi sequi itaque voluptatum
                                            architecto minus numquam!
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Harum
                                            dolore consequatur eius non incidunt
                                            fugit hic error accusantium,
                                            deserunt et magnam beatae, ipsa
                                            distinctio eaque laborum molestias
                                            maiores consectetur quo, expedita
                                            laboriosam quia quibusdam. Dolores
                                            dolorem, tenetur rerum veniam
                                            facilis eaque corporis ducimus
                                            laudantium excepturi officiis
                                            quaerat maiores voluptatem vero
                                            optio. Id culpa expedita ipsa enim
                                            omnis debitis. Beatae mollitia natus
                                            ullam repudiandae ipsa neque. Sequi
                                            explicabo odio cum, odit voluptatem
                                            cupiditate vero, error incidunt fuga
                                            dolore id ut! Eligendi,
                                            necessitatibus beatae voluptatem
                                            ipsum, ducimus amet sed officia ad
                                            aliquid aperiam id, eius accusamus
                                            quibusdam doloremque! Enim
                                            laudantium sint quae.
                                        </p>
                                        <div className="pro-modal-footer mt-30 mb-45">
                                            <div className="row align-items-center justify-content-md-between">
                                                <div className="col-xl-7 col-lg-7  col-md-12 col-sm-12 col-12">
                                                    <div className="modal-tags d-sm-flex align-items-center pt-25">
                                                        <h6 className="mb-0 pr-15">
                                                            Tags :
                                                        </h6>
                                                        <ul className="tag-list">
                                                            {/* tags start */}
                                                            {tags.map(
                                                                (item, i) => (
                                                                    <li
                                                                        key={i}
                                                                        className="d-inline-block pr-10"
                                                                    >
                                                                        <Link
                                                                            className="d-block"
                                                                            href={
                                                                                item.path
                                                                            }
                                                                        >
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                            {/* tags end */}
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-xl-5 col-lg-5  col-md-12 col-sm-12 col-12">
                                                    <div className="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25">
                                                        <h6 className="pr-12 mb-0 pb-0">
                                                            Share :
                                                        </h6>
                                                        <ul className="social-link text-md-right">
                                                            {/* social start */}
                                                            {social.map(
                                                                (item, i) => (
                                                                    <li
                                                                        key={i}
                                                                        className="d-inline-block"
                                                                    >
                                                                        <Link
                                                                            className={`${item.color} text-center pl-15 d-inline-block transition-3`}
                                                                            href={
                                                                                item.path
                                                                            }
                                                                        >
                                                                            <i
                                                                                className={
                                                                                    item.icon
                                                                                }
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                            {/* social end */}
                                                        </ul>
                                                        {/* social-link */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
