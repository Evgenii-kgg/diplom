import React from "react";
import "../App.css";

function Page404() {

    return <div>
        <main className="container">
            <div className="row">
                <div className="col">
                    <div className="banner">
                        <img src="/img/banner.jpg" className="img-fluid" alt="К весне готовы!"></img>
                            <h2 className="banner-header">К весне готовы!</h2>
                    </div>

                    <section className="top-sales">
                        <h2 className="text-center">Страница не найдена</h2>
                        <p>
                            Извините, такая страница не найдена!
                        </p>
                    </section>
                </div>
            </div>
        </main>
        </div>
}

export default Page404;
