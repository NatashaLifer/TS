const baseUrl = 'https://jsonplaceholder.typicode.com/'

type Post = {
  title: string,
  body: string,
  id: string,
}

const getAllPosts = async () => {
    const response = await fetch(baseUrl + 'posts')
    // console.log(response);
    const data = await response.json()
    // console.log(data);
    return data
}

const deletePost = async (event: any) => { 

    if(event.target.textContent === 'Delete') {
        const id: string = event.target.parentElement.id
        const response = await fetch(baseUrl + 'posts/' + id, {
            method: 'DELETE'
        })
        return response.status === 200 ? true : response.status
    }
 }

window.addEventListener('load', () => {
    const post = getAllPosts()
    post.then(data => {
        renderPosts(data)
    })
})

function renderPosts(posts: Post[]): void {
    const container = document.querySelector('.wrapper')
    if(container){
    container.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target){
        const statusDel:any = deletePost(event)
        if(statusDel && target.textContent === 'Delete') {
            if(target.parentElement){
            const post = document.getElementById(target.parentElement.id)
            console.log(post);
            post?.remove()
            }
        } else {
            // switch (statusDel) {
            //     case 400:

            //         break;
            //     case 401:

            //         break;
            //     case 404:

            //         break;

            //     default:
            //         break;
            // }
        }
      }
    })

    posts.forEach(singlePost => {
        const { title, body, id } = singlePost
        const post = createElement('div', '')
        post.id = id
        // console.log(post);
        
        const spanId = createElement('span', id)
        const postTitle = createElement('h2', title)
        const postBody = createElement('p', body)
        const buttonDelete = createElement('button', 'Delete')
        post.append(postTitle, postBody, buttonDelete, spanId)
        container.append(post)
    })
  }
}

const createElement = (tag: string, textContent: string): HTMLElement => {
    const element = document.createElement(tag)
    if (textContent) element.textContent = textContent
    return element
}