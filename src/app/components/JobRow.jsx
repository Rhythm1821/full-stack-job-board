import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JobRow() {
    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-sm md:flex relative">
                <div className="absolute top-4 right-2">
                    <FontAwesomeIcon icon={faHeart} className="size-4 text-gray-300 cursor-pointer" />
                </div>
                <div className=" flex grow gap-4">
                <div className="content-center">
                    <img 
                     className="size-12"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUe12D///8A1FAA1VQA1VYZ114A1E4Q1lsM1lrs+/DA8c31/ffL89bU9d2j67fO9Ngz2WvZ9uGV6Kzx/PS478eO56e378Z345aD5Z+c6bE72m/f+Oav7cCa6bDF8tF+5JtS3X1x4pJb3oNI3Hdm4Iop2GZZ3oKp7LyJ5qRN3Hrl+erB5zK+AAAOy0lEQVR4nN2d6XqqOhSGIbOiiCOKVkWxWO//AjcBB0QISQiK+/uze/qcVt4mJFljLPsdcnrjQX8Tuz8Trh83XvRH495bPtq22v31l218PngAQAgRYohlSr5CECbf9aJzvL20+wjtEQ7jXZBAIEaxVSVMGUpIg108bu05WiF0tvMjZ6tGK4ByzuN867TxMOYJh5OAQGm4PCYkx8nQ+PMYJuyHSIcuR4n8vtlHMknYjwCk2nQ3UQgik5DGCIc7aADvBgl3xqarGULHPUFmCC8TA6fYyKMZIVz7BOm/e1XCiOzWBp6uOeFgT8wO30OM7AcfJ+x70PzwPURh0HTVaUbYMh8Xhl4zxiaEg6B1vowxaDJX9QnXe/AOvpQR7PXXHF1Cxyemdj8ZUeLrHlo1CWPD21+9GNTcH7UI1wF8Mx8XDLSmqg7hmbzrBXwWJue3EI5P6CN8XOikbikrE84/NICZMJm3TNgLPjeAmVCg6MFSI1y8bQusFgaz9gh98Gm8VGDXEuHUe/ceWCUUTNsgHLZgA+qKInkXgDRh/NE1tChMNqYJl914BR8Csru/JGH0iWOaWDAySXj89C5YJnQ0Ruh0ZhF9FvNkLCoJwqn1TktQRdSSQKwnnOIuLaLPolb9xlhLOBUExz4vjGsR6wi7PIJcuHai1hA6VrcBJd7FGkKvq4vMQ9RrQnjsPmCyaYj3RSFh1MWN/lVIeLoRES67d1QrFxSdUQWEcdcO29UCAkujmnBEPv3cCiLV9mIl4fRbpmgqjCp3/kpCr+sb4bNooErof8cy+hDy1QgX37PK3FTlZCwn7H0fYIJY7iouJ/yylzATLn8VSwnn3/YSZkKlMY0ywuE37YR5kbLIVBlh5y2mKuGTHOG5m34nGaGSA+or4fpb5ygXeQ2EvxJ+5Tp6U8l6+kLoftV59EWvGRtFQucb9/q8YNFtUyQMv3eZycSK59MC4VcvM5mKi02B8M/MMoMT0Sfx7xj51bWiexHhQP8tTJAYSythAESWd/z7jcIw9BMl/0SH/dGzePFIVjwjqjJpLDAQEGrsFGnZS/Lop304dxfb4UXoZp9exoNZPNlFAeN/CWFBja4KO8YT4Uxpp8A0GRRyOpzd7Vghc+Cu3nC22v1aJCE1ywmfUm6fCE/SZTwJHDmFP30Tqebr7coPCITMlPsZP3nB84R9qSHk1TsnPzZdvnPpTw4MmMF8GsQ8Yf1bmNCBv0k7FVhcve3kFwLUlPJpEHOE25qFlCISTJpXB9RqHYe0ISXMPWaOULwXIhgtdNYTPV02IQL6KUo4tyc+CIXHGQwmb6O7abw6Et2hzB1sHoS+4JdR701FuwU5M81yuNzp9E7oCIYQ1wQhW9XW1ymKI/fV8E7oCowK1NriKadtqLzyIPf2w3dCgfsJLj4Dltdsr1Yf93BK3QiH1bt9qQfr/er9YJXZCm9HkhuhYJ15DPintT3IFwLe15oboWC3h+3Vyiurd4aykxVef+RKKLIqwMd4ShVjuYq52+H0ShgJZnjHCJPhOMkw0muGxpVQdCTtHKFkZef1uTNCoekL3ncclVe/fhyv0zQjDEXLMNx+EqVSG1YTA6Rh+v9lhELTl1ZFyAVyepf1cDQaDRIl/wzHl8vU+MFoUlPkma2mKeFIbNwTqWdzLqOZO/cPxxMkIHWq5ZV8BxBgBb/h8ifuD80c5KeR0KTNNv2UcC7eR6/DXaXeaHOOgtSLyBj3jFb/Ju5FvXbfQcdwvhk17b7TFyGyyZ0wqHlpq5KqnFHs13bZqaTNuu940c+sgT9rLEDM3IqccFrryievmRzDOLSIAT9gBhrsdF1bolFMXy9OKOFje65PHf7sDTs50y5DwXKm8X4KDivpLsAJZcLaiLrZp/c2EZQ+G6opwQTY3yi+m5fqQWTnK2Hda5h9PALWITpYzX194o+hyefs+io7y7Hy8dMXkRPKhmN4OOktbSIYJPtYeign1VMQZIQC4/dzwoh4E7k1tl99tuE7YkIYdzQDKnkvTiuJkRxUjxCKU0KRG/HDSkbyWFtKKSDkB06r6+klyUj6YifDpnoO8qXGkl9oPiYGApG3TzQHASdcd56QN+Fhk8oNRLSMwEtCKBc1/LgQWJZb4oJJmp5qLNvt6FL6IkZ2ZYzCJobMTQh3RnOEspQMxC2ku/h/pnZV01/OyPJlrh6EOwFbJoS/JpZSzpVYfQR6+2g3X7mbWX/LbfvEzh/0+4vYnSzDwxGTNAGjASoDP8+AoXgG0kNCKJ2eUC6etADJ6bB0ZSx3Zz1Y/Ph7qp+AgXAuSN871kxAfEoIGyQJJSYP8UJXp0/uur8KPaLQxfXxqTCYZXN16Nf3eQC2pZmMyE/H3m7T0OE/XpyP6qOZHAK8KPqDMt24gGMJzCsBHdhPBqZ8Z+M4xECREsuuW/BiqVoWPCNjbjwjo7fwcSuWJxxaWyVCSg6btlzg6/gAjLeBg1trprLhw6jljIXtjjXpQ/wqNLNUrEOwapcv1fCMgbmRRBtL4dCG3pVTM1wiUz2JUWz9SP+9Kiqn2tE2IkZmK1tZAj9OQXD0RsK0+zJoPpBsYtXELHKibwXkGkWNWxSzuTxhTXymHfXmDb3PKoRMuWOhGclmJnwvoW0vpDITmhN+ZJZeJZd9UUEovZZixTaZjjPlcswc0BdYz9mSrKXy+yGojfBlce7oz6OA8Eh3puRL6v1F/txdDNb6vK7WmTXZD+XPNPiv8tMTe9b/QwRWxrnT8HYa8wVBNN8MtU7vS43208mZRuFcCktS+Jxh7HtKPoks6Av/zurm82Wv7PlMzqUqtkWhHeN0tgy0A93XqO9CzQPSV63HSGwLJfsQhPf3aLs8AQ0vy7N41JdFsUKmgqPYuQoOFG18BsLZeD2Kf4E5M44iQP2Z9BKkVuWX2PiqfhruPITG/Q0UkaNMrDDRSOmBwUXX12ZePCAqFfXdqwwicJr4S40LM+Ctav0kC5W9H9hWx3pEYET2Nd2sLworR+rzVhr0dwhDeBa+kgrV2PTXeOzJjBjZC5JaFQjZLiFcdTJ+iOGpKkWhpzBL0/hhV2PAGNLyQg+VU1gaA+5uHB+j0mKWX5XKmXXXczEQfenkMVR5XtD9fJrkfSysOSq7Gy8rtGoS9Rs93VUNfwvY5/eOQOVprzlRospD1ae5ZXFzw55ZJy/wPO9EIcly2zV7KNBH/u4WKw3HNa+tJlNfRpgi3l8BH6PlatMfrnsvloLTWw+3m59lFECNZAUGd/3xerBSvQTtmpsoqo+tVWrIwqP/M5OuMHDGsx/lGD5LTRrVCXDNL9VdanhbDLQ/azpd7HUawzfWKqJM9xzhpfKLyCP5NFptG8dLh25rWeNWLs9b8VSDIfibN4d7UK7+tOvuxUpru+TqLfJCDe8jLJMzC83d0/oQmV4JlV7Eyk6oTaVXdy9S1kZApu4pLyp5M4iW+oYCv1dlsaSUUJApXdRLOzSzmrqWgcDv7VlHd0L5wzdbtgrIZSDweyO0H4SiQufnH3pHPWnvDExY5U81pNJGJTTRGEpCK9Z8k4SzHKH0wQ2av929QjFtOo7AyRHW5BI/hKSvyuJynKmjHyF1UaP3sVCPLztN6a8Y6TJK+83tA34JPLlFSCGzgn20nGwUG7tNmqR/XSepTF+MJ1UEgnujzTwK0hhp2jOwaPbyPoqZ6QiDcDKTjRw6ElnAlU9qPxPKGvoYF2Zdb+D6R5Va4DRCSjxfLkC6Pmpar7TY20TaDMb4/mS9/uSAuAGk8XdOWxL+riQWro3evZnglqMm02Oo8GzkMFtfRm7UvEMep4w2dVZKT+ck98gcuX+h4PqmycAZM115VnVN5FCngzq7p8LeCdVMKKPiufeuaCSlj1wPlfT6as+pKCPMREE1BcvgqlwC14NQ1J3gHaIQzSsGUj1ODR4LdS6Vq7rq+11iJCpfXFUJce6Sq3zvyw4EoSg4llgvymOYN4Hy6XgNa7zMCMPghVH1PazqX2ovOjCIVspYyChXXUvhrIKwG4No8WDMb36HVMugKTYJfCLsyCBaPBjzuHv7omooPg1hoZ93VwbR4oGKqykaq55LC71Inwm7sJzeBelutfKRsqlf8CUVUps/vyfmRZGGtx8XLnwsEI7/g7sRxkLCz55OTYiFtpiwM6mKugJ1d5R0NEVKWq+56P/bXUGvXatfCb/2TjKuknvJSgphdt87T1FJ4Kis1KfjV3FXq7Rwqex7X3WLbF6lN8qWlmstv3Oelt0r93/dYVne/b+c8PKN85SUe10rigo333e0qWqyWlU2+XX3r6GwgqSyMLRDxrCMqq/gqCRUyYjvgKD6vdz24JtWG1LdMUdQvux+z2oDBBdUiAq0v+b2cbQTUAhL0H+/Y0FlBxGEuMheKTH+U6LirjI1bQS+YM+gNdfg1BA6nbekXpJDFAnt3lu6P+sL07ocpNpmF73W8sxNCLPafPP6dh5dHkVM6xPqJRqWTDv7LlIskSYn05LFOXVz06AnmbxHuaYzQRe3fibXXU2yrc5v9w5wSHiSUSa0/a4dw4HoLKpDaLvdMqaI9HV38s2fBk2aihkWhvIdVBXaW/VOXVlvmMq1qEoNvMJuvIwgVHlotRZlsX7atTFholQvoEhoX06f3jaQp9hbW5GQtxT75DBiolx4pUxojzS735kQwuo9VNUJbXv3oWHUGEBNQnv4kbcReVod4LUIbXtlrg5SUky3EbUmoe1Eb52qmIS6FWK6hLY9Pr7tGIfhUf+KAn1CqdtOzfAVG7i8jdC2F1brjAlfs4vPmxE26/Erx1fTva11QtveHltbV8trE95OmKw5odrd9XLCiIQm7jw3QZjsHSulu+slRIG1MnORhhnCRKPQ3B0jFILQWBN/Y4SJZgcTXVgoIoemq0teJgmT2bqIYJPmtLyzTyTfjlZKZgm5BmeP6DQYxgwR72z8jp4WCO20SbSnUgGNaTJ23nLWyh09rRByOSM3PKVV7ILADk5bhYFT6I5a6wrTGmGmdX+12+OsHR3LK+tbh/e7Vb/lZiItE17lrIdbfoHefH4+n+fziRsvtsMGPfZV9A/SoNsfiWgfRAAAAABJRU5ErkJggg=="
                     alt="" />
                </div>
                <div className="grow md:flex">
                    <div className="grow">
                        <div className="text-gray-500">Spotify</div>
                        <div className="font-bold mb-2 text-lg">Product Designer</div>
                        <div
                            className="text-gray-500 text-sm ">
                                Remote &middot; New York, US &middot; Full-Time
                        </div>
                    </div>
                    <div className="content-end text-gray-500 text-sm  ">
                        2 weeks ago
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}