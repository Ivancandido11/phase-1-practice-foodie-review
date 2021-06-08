const updateDishDescriptionBtn = document.querySelector("body > main > div > form.description > button")
const dishName = document.querySelector("body > main > div > h2")
const dishImage = document.querySelector("body > main > div > img")
const dishDescription = document.querySelector("body > main > div > form.description > textarea")
const dishReviewsUl = document.querySelector("body > main > div > ul")
const existingReviews = document.querySelectorAll("body > main > div > ul > li")

const getDish = (dish) => {
  existingReviews.forEach(eReview => {
    dishReviewsUl.removeChild(eReview)
  })
  dishName.innerHTML = dish.name
  dishImage.src = dish.image_url
  dishDescription.innerHTML = dish.description
  dish.reviews.forEach(review => {
    const reviewList = document.createElement("li")
    reviewList.innerHTML = review
    dishReviewsUl.append(reviewList)
  })
}

const init = () => {
  fetch("http://localhost:3000/dishes/1")
    .then(resp => resp.json())
    .then(dish => {
      getDish(dish)
    })
  updateDishDescriptionBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const descriptionData = {
      description: dishDescription.value
    }
    const configObject = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(descriptionData)
    }
    fetch("http://localhost:3000/dishes/1", configObject)
      .then(response => response.json())
      .then(update => {
        dishDescription.innerHTML = update.description
      })
  })
}

document.addEventListener("DOMContentLoaded", init)
