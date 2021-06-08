const updateDishDescriptionBtn = document.querySelector("body > main > div > form.description > button")

const getDish = (dish) => {
  const dishName = document.querySelector("body > main > div > h2")
  const dishImage = document.querySelector("body > main > div > img")
  const dishDescription = document.querySelector("body > main > div > form.description > textarea")
  const dishReviewsUl = document.querySelector("body > main > div > ul")
  const existingReviews = document.querySelectorAll("body > main > div > ul > li")
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
}

document.addEventListener("DOMContentLoaded", init)
