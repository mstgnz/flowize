package handler

import (
	"net/http"

	"github.com/mstgnz/flowize/internal/response"
)

type HomeHandler struct{}

func (h *HomeHandler) HomeHandler(w http.ResponseWriter, r *http.Request) error {
	return response.WriteJSON(w, http.StatusOK, response.Response{Success: true, Message: "Welcome to Flowize"})
}
