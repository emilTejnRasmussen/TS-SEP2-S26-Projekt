package com.example.backend.business.dto.error;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.time.LocalDateTime;
import java.util.Map;

@JsonPropertyOrder({"message", "status", "error", "fieldErrors", "timeStamp" })
public class ErrorResponse
{
    private String error;
    private String message;
    private int status;
    private LocalDateTime timeStamp;
    private Map<String, String> fieldErrors;

    public ErrorResponse(String error, String message, int status)
    {
        this.error = error;
        this.message = message;
        this.status = status;
        this.timeStamp = LocalDateTime.now();
    }

    public ErrorResponse(String error, String message, int status, Map<String, String> fieldErrors)
    {
        this.error = error;
        this.message = message;
        this.status = status;
        this.timeStamp = LocalDateTime.now();
        this.fieldErrors = fieldErrors;
    }

    public String getError()
    {
        return error;
    }

    public void setError(String error)
    {
        this.error = error;
    }

    public String getMessage()
    {
        return message;
    }

    public void setMessage(String message)
    {
        this.message = message;
    }

    public int getStatus()
    {
        return status;
    }

    public void setStatus(int status)
    {
        this.status = status;
    }

    public LocalDateTime getTimeStamp()
    {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp)
    {
        this.timeStamp = timeStamp;
    }

    public Map<String, String> getFieldErrors()
    {
        return fieldErrors;
    }

    public void setFieldErrors(Map<String, String> fieldErrors)
    {
        this.fieldErrors = fieldErrors;
    }
}
