import Dashboard from "./Dashboard";

function Home() {
    return (
        <>
            <section className="mt-36">
                <h1 className='text-red-500 text-center text-3xl'>NutriMind</h1>
            </section>
            <section>
                <Dashboard />
            </section>
        </>
    )
}

export default Home;