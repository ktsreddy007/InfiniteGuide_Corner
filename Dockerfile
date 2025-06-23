# ==================================================
# STEP 1: Build and publish
# ==================================================
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
# Copy the solution and project files
COPY ["InfiniteGuide_Corner.sln", "./"]
COPY ["src/Infyguide_corner/Infyguide_corner.csproj", "src/Infyguide_corner/"]
# Restore dependencies
RUN dotnet restore "src/Infyguide_corner/Infyguide_corner.csproj"
# Copy the rest of the files
COPY . .
# Build and publish the app
RUN dotnet publish "src/Infyguide_corner/Infyguide_corner.csproj" -c Release -o /app/publish

# ==================================================
# STEP 2: Final Image
# ==================================================
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /
COPY --from=build /app/publish .
# Set the port to match your app's internal port
ENV ASPNETCORE_URLS=http://+:5053
EXPOSE 5053
# Run the app
ENTRYPOINT ["dotnet", "Infyguide_corner.dll"]
