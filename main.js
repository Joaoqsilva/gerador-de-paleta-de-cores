function generetionColors() {
    const chars = '123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += chars.charAt(Math.floor(Math.random() * chars.length))
    }; 

    return
}

document.getElementById('btn-action').addEventListener('click', () => {

    for (let i = 0; i < 5; i++) {
        let div_color = document.getElementById('color-${i+1}')
        div_color.style.backgroundColor = "red";
    }

}) 