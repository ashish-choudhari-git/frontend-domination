
function createCard(imageLink, time, title, channelName, views, monthsAgo) {
    
    let formattedViews;
    if (views >= 1000000) {
        formattedViews = (views / 1000000).toFixed(1) + 'M views';
    } else if (views >= 1000) {
        formattedViews = (views / 1000).toFixed(1) + 'K views';
    } else {
        formattedViews = views + ' views';
    }


    const card = document.createElement('div');
    card.className = 'cards';

   
    card.innerHTML = `
        <div class="image" style="background-image: url('${imageLink}'); position: relative;">

            <span class="time">
                ${time}
            </span>
        </div>

        <div class="texta">
            <h3><b>${title}</b></h3>
            <div class="texta2">
            <h5>${channelName}</h5>
            <h5>${formattedViews}</h5>
            <h5>${monthsAgo} months ago</h5>
            </div>
        </div>
`;
    document.querySelector('.container').appendChild(card);
}

createCard(
    'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA',
    '10:45',
    'Installing VS Code and How It Works',
    'CodeWithHarry',
    2000000,
    2
);

createCard(
    'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA',
    '15:30',
    'Learn JavaScript in 1 Hour',
    'Programming Hero',
    550000,
    5
);

createCard(
    'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA',
    '15:30',
    'Learn JavaScript in 1 Hour',
    'Programming Hero',
    550000,
    5
);
createCard(
    'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA',
    '15:30',
    'Learn JavaScript in 1 Hour',
    'Programming Hero',
    550000,
    5
);

