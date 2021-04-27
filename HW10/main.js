const limit = 5;

function blocks() {
    const base = document.createElement('div');
    base.classList.add('base')
    for (let i = 0; i < limit; i++) {
        document.body.append(base)
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.display = 'flex';
        base.appendChild(row);
        base.style.marginTop = "15px";

        for (let j = 0; j < limit; j++) {
            const block = document.createElement("div");
            block.classList.add("block");
            row.appendChild(block);

            function getRandomColor() {
                return `#${(Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`;
            }

            block.style.backgroundColor = getRandomColor();
            block.style.width = "50px";
            block.style.height = "50px";
            block.style.margin = "1px";
            block.style.border = "2px solid #000";
        }
    }
}

function newBlocks() {
    if (!document.querySelector('.base')) {
        blocks();
    }
    document.querySelector('.base').remove();
    blocks();
}

let stop = false;

function dynamicBlocks() {
    setInterval(() => {
        if (stop) {
            return
        }
        if (!document.querySelector('.base')) {
            blocks();
        }
        document.querySelector('.base').remove();
        blocks()
    }, 500)
}

function stopDynamicBlocks() {
    stop = true;
}