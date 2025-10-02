package com.introduce.jungjiwook;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@RequestMapping
@Controller
public class MainController {

    @GetMapping("/")
    public String getMain() {

        return "portfolio";
    }

    @GetMapping("/aboutme")
    public String getAboutMe() {

        return "aboutme";
    }

    @GetMapping("/topmenu")
    public String topmenu() {
        return "topmenu";
    }

    @GetMapping("/aboutMe")
    public String aboutMe() {
        return "aboutme";
    }

    @GetMapping("/portfolio")
    public String portfolio() {
        return "portfolio";
    }

    @GetMapping("/study")
    public String study() {
        return "study";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }

    @GetMapping("/portfolio/wandu")
    public String portfoliWandu() {
        return "portfolio/wandu";
    }

}
