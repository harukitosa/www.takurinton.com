export const postContact = async (body:object) => {
    await fetch(`http://localhost:8080/portfolio/v1/contact`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "same-origin",
        body: JSON.stringify(body), 
    })
    return
}