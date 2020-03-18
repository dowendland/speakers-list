package controllers

import javax.inject.Inject

import play.api.mvc._

/**
  * The basic application controller.
  *
  * @param assets Assets controller reference.
  * @param cc Controller components reference.
  */
class ApplicationController @Inject() (
    assets: Assets,
    cc: ControllerComponents
) extends AbstractController(cc) {

  def index = assets.at("index.html")
}
