package com.cloudsherpas.employeetool.dto;

public class AssessmentDTO {

    private Long id;


    //    private int scale;
//    private String rating;
    private String score;
    private String question;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

//    public int getScale() {
//        return scale;
//    }
//
//    public void setScale(int scale) {
//        this.scale = scale;
//    }
//
//    public String getRating() {
//        return rating;
//    }
//
//    public void setRating(String rating) {
//        this.rating = rating;
//    }

//    public int getScore() {
//        return score;
//    }
//
//    public void setScore(int score) {
//        this.score = score;
//    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }


    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }
}